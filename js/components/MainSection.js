var React = require('react');
var TodoItem = require('./TodoItem');
var TodoAction = require('../actions/TodoAction');

var MainSection = React.createClass({

    render: function(){
        var allTodos = this.props.allTodos;
        if (Object.keys(allTodos) < 1) return null;
        var todos = [];
        for (var key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteALL}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id = "todo-list">{todos}</ul>
            </section>
        );
    },

    _onToggleCompleteALL: function() {
        TodoAction.toggleCompleteALL()
    }
});

module.exports = MainSection;