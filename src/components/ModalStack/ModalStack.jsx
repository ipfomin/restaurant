import React from 'react';
import Modal from './Modal'
import styles from './ModalStack.module.scss';

export default class ModalStack extends React.Component {
  
  constructor () {
    super()
    this.state = {
      modals: []
    }
  }

  componentDidMount () {
    this.props.modalStorage.subscribe(this.modalsUpdate.bind(this))
  }

  modalsUpdate (modals) {
    this.setState({ modals })
  }

  render() {
    return (
      <section className={styles.modalStackRoot}>
        {
          this.state.modals.map(modal => 
            <Modal
              element={modal.element}
              data={modal.data}
              key={modal.id}
              modalStorage={this.props.modalStorage}
              store={this.props.store}
            />
          )
        }
      </section>
    );
  }
}
