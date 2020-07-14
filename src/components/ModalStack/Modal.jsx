import React from 'react';
import styles from './Modal.module.scss';

export default class Modal extends React.Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      this.props.modalStorage.clear()
    }
  }

  render () {
    if (!this.props.element) {
      return null
    }
    return (
      <div className={styles.modalRoot}>
        <div className={styles.modalContent} onClick={this.handleClick}>
          {
            React.cloneElement(this.props.element, {
              data: this.props.data,
              modalStorage: this.props.modalStorage,
              store: this.props.store
            })
          }
        </div>
      </div>
    );
  }

}
