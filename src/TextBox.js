import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        let textValue = this.props.textValue;
        return (
            <input type="text" id="textbox" defaultValue={textValue} onChange={this.props.handleTextBox}/>
        );
    }
}

export default TextBox;
