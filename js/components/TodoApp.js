var React = require("react");
var Header = require('./Header');
var Footer = require('./Footer');
var MainSection = require('./MainSection');

//var TodoItem = require('./TodoItem'),
//    TodoTextInput = require('./TodoTextInput');

var TodoStore  = require('../stores/TodoStore');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            allTodos : TodoStore.getAll()
        }
    },

    componentDidMount: function() {
      TodoStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this.handleChange);
    },

    handleChange: function() {
      this.setState({
          allTodos : TodoStore.getAll()
      });
    },

    render: function() {
        return (
            <div>
                <Header />
                <MainSection allTodos={this.state.allTodos}/>
                <Footer />
            </div>
        );
    }

})