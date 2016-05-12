var React = require('react');
var TodoAction = require('../actions/TodoAction');

var TodoItem = React.createClass({

    render:function(){
        var todo = this.props.todo;

        /*todo = {id:XXX,text:XXX } */
        console.log(todo.complete);
        var liClass = todo.complete ? 'completed' : '';
        return (
            <li key={todo.id} className={liClass}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this._onToggleComplete}
                        />
                    <label>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroy} />
                </div>
            </li>
        );
    },

    _onDestroy:function() {
        TodoAction.destroy(this.props.todo.id);
    }
})

module.exports = TodoItem;