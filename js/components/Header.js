var React = require('react');

var TodoTextInput = require('./TodoTextInput');
var TodoAction = require('../actions/TodoAction');

var Header = React.createClass({

    render:function(){
        return (
            <header id="header">
            <h1>todos</h1>
                <TodoTextInput
                    id='new-todo'
                    placeholder='what needs to be done?'
                    onSave={this._onSave} />
            </header>
        );

    },
    _onSave:function(text) {
        TodoAction.create(text);
    }
})

module.exports = Header;