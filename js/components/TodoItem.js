var React = require('react');
var TodoAction = require('../actions/TodoAction');
var TodoTextInput = require('./TodoTextInput');

var TodoItem = React.createClass({

    getInitialState: function () {
      return {
          isEditing: false
      }
    },

    render:function(){
        var todo = this.props.todo;

        /*todo = {id:XXX,text:XXX } */
        console.log(todo.complete);
        var liClass = todo.complete ? 'completed' : '';
        var input;
        if (this.state.isEditing) {
            liClass = liClass + ' ' + 'editing';
            input = <TodoTextInput
                        className='edit'
                        onSave={this._onSave}
                        value={todo.text} />;
        }
        return (
            <li key={todo.id} className={liClass}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this._onToggleComplete}
                        />
                    <label onDoubleClick={this._onDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroy} />
                </div>
                {input}
            </li>
        );
    },

    _onDestroy:function() {
        TodoAction.destroy(this.props.todo.id);
    },

    _onDoubleClick:function() {
        this.setState({
            isEditing: true
        });
    },

    _onToggleComplete:function () {
        TodoAction.toggleComplete(this.props.todo);
    },

    _onSave:function (text) {
        TodoAction.update(this.props.todo.id, text);
        this.setState({
            isEditing: false
        });
    }
})

module.exports = TodoItem;