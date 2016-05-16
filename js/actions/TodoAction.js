/**
 * Created by vickl on 5/5/2016.
 */
var AppDispatcher = require('../dispatcher/TodoAppDispatcher');

var TodoActions = {
    create: function(text) {
        AppDispatcher.handleViewAction({
            actionType: 'TODO_CREATE',
            text: text
        });
    },

    destroy: function(id) {
        AppDispatcher.handleViewAction({
            actionType: 'TODO_DESTROY',
            id: id
        });
    },

    destroyCompleted:function () {
      AppDispatcher.handleViewAction({
          actionType: 'TODO_DESTROY_COMPLETED'
      })
    },

    toggleCompleteALL: function(){
        AppDispatcher.handleViewAction({
            actionType: 'TODO_TOGGLE_COMPLETE_ALL'
        });
    },

    toggleComplete: function(todo) {
        AppDispatcher.handleViewAction({
            actionType: todo.complete? 'TODO_TOGGLE_UNDO_COMPLETE' : 'TODO_TOGGLE_COMPLETE',
            id: todo.id
        })
    },

    update:function(id, text) {
        AppDispatcher.handleViewAction({
            actionType:"TODO_UPDATE",
            id:id,
            text:text
        })
    }
}

module.exports = TodoActions;