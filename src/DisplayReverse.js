import React, { Component } from 'react';

class DisplayReverse extends Component {
    render() {
        let originalText = this.props.textToReverse;
        let reverseText = originalText.split("").reverse().join("");

        return (
            <p>{reverseText}</p>
        );
    }
}

export default DisplayReverse;
