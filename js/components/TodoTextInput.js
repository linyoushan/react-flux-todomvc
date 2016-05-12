var React = require('react');

var TodoTextInput = React.createClass({

    getInitialState: function (){
        return {
            value:this.props.value || ''
        }
    },

    render:function(){
        return <input className = {this.props.className}
                      id = {this.props.id}
                      placeholder = {this.props.placeholder}
                      onBlur={this._save}
                      onChange={this._onChange}
                      onKeyDown={this._onKeyDown}
                      value={this.state.value}
                      type="text" />;
    },

    _onKeyDown:function(event) {
        if (event.keyCode === 13) {
            this._save();
        }
    },

    _save:function(event) {
        this.props.onSave(this.state.value);
        this.setState({
            value:''
        });
    },

    _onChange:function(event) {
        this.setState({
            value:event.target.value
        });
    }
})

module.exports = TodoTextInput;