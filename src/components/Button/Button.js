import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { label, onClick, type } = this.props;
    return (
      <button type={ type } onClick={ onClick }>
        { label }
      </button>
    );
  }
}

export default Button;