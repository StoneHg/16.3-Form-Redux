import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { label, name, onChange, value, id, defaultOption, defaultValue, options } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          id={ id }
          required
          onChange={ onChange }
          value={ value }
        >
          <option value={ defaultValue }>{ defaultOption }</option>
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default Select;
