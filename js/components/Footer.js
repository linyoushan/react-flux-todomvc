var React = require('react');
var TodoAction = require('../actions/TodoAction');

var Footer = React.createClass({

    propTypes: {
      allTodos : React.PropTypes.object.isRequired
    },

    render:function(){
        var allTodos = this.props.allTodos;
        var totalCount = Object.keys(allTodos).length;
        if(totalCount == 0)
            return null;

        var completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        var clearCompletedButton;
        if (completed) {
            clearCompletedButton = <button
                             id='clear-completed'
                             onClick={this._onClearComplete}>
                                Clear completed {completed}
                            </button>;

        }

        var unCompleted = totalCount - completed;
        return <footer id="footer">
                    <span id="todo-count">
                      <strong>
                          {unCompleted}
                      </strong>
                        {(unCompleted == 1 ? ' item' : ' items') + ' left'}
                    </span>
                    {clearCompletedButton}
                </footer>;
    },

    _onClearComplete: function (event) {
        TodoAction.destroyCompleted();
    }
})

module.exports = Footer;