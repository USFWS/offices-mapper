import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    const query = e.target.value;
    this.props.update(query);
  }

  render() {
    return <input
      type='text'
      onChange={this.updateQuery}
      value={this.props.query}
      placeholder={this.props.placeholder}
      onFocus={this.props.onFocus}
      onBlur={this.props.onBlur}
    />
  }
}

export default Input;
