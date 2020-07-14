import React from 'react';
import styles from './RestInput.module.scss';

export default class RestInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (e) {
    this.props.handleInput && this.props.handleInput(e.target.value)
  }

  render() {
    const value = this.props.value
    const placeholder = this.props.placeholder
    const className = `${styles.restInputRoot} ${this.props.className}`
    return (
      <div className={className}>
        <input
          className={styles.restInput}
          value={value}
          placeholder={placeholder}
          onChange={this.handleInput}
        />
        <div className={styles.restInputRight}>
          {this.props.children}
        </div>
      </div>
    );
  }
}