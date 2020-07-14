import React from 'react';
import styles from './RestTextArea.module.scss';

export default class RestTextArea extends React.Component {
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
    const className = `${styles.restTextAreaRoot} ${this.props.className}`
    return (
      <div className={className}>
        <textarea
          className={styles.restTextArea}
          value={value}
          placeholder={placeholder}
          onChange={this.handleInput}
        />
        <div className={styles.restTextAreaRight}>
          {this.props.children}
        </div>
      </div>
    );
  }
}