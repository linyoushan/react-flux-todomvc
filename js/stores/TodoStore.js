/**
 * Created by vickl on 5/4/2016.
 */
var AppDispatcher = require('../dispatcher/TodoAppDispatcher');
var EventEmitter = require('events');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text) {
    var id = Date.now();
    _todos[id] = {
        id : id,
        complete: false,
        text : text
    }
}

function update(id, updates) {
    _todos[id] = assign({}, _todos[id], updates);
}

function destroy(id) {
    delete _todos[id];
}

function toggleCompleteALL(complete) {
    for (var key in _todos) {
        _todos[key].complete = complete;
    }
}

function areALLComplete() {
    for (var key in _todos) {
        if(!_todos[key].complete) {
            return false;
        }
    }
    return true;
}

function destroyALLComplete() {
    for (var key in _todos) {
        if (_todos[key].complete) {
            delete _todos[key];
        }
    }
}

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _todos;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});
AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case 'TODO_CREATE':
            if(action.text != '') {
                text = action.text.trim();
                create(text);
                TodoStore.emitChange();
                break;
            }
        case  'TODO_DESTROY':
            destroy(action.id);
            TodoStore.emitChange();
            break;

        case 'TODO_UPDATE' :
            if (action.text.trim() != "") {
                update(action.id, {text: action.text});
                TodoStore.emitChange();
                break;
            }

        case 'TODO_DESTROY_COMPLETED' :
            destroyALLComplete();
            TodoStore.emitChange();
            break;

        case 'TODO_TOGGLE_COMPLETE' :
            update(action.id, {complete:true});
            TodoStore.emitChange();
            break;

        case 'TODO_TOGGLE_UNDO_COMPLETE' :
            update(action.id, {complete:false});
            TodoStore.emitChange();
            break;

        case  'TODO_TOGGLE_COMPLETE_ALL' :
            if(areALLComplete()){
                toggleCompleteALL(false);
            } else {
                toggleCompleteALL(true);
            }
            TodoStore.emitChange();
            break;

        case  'TODO_TOGGLE_UNDO_COMPLETE_ALL' :
            toggleCompleteALL(false);
            TodoStore.emitChange();
            break;
    }
    return true;
});

module.exports = TodoStore;