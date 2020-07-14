import React from 'react';
import MenuLine from './MenuLine'
import styles from './MenuFloating.module.scss'

export default class MenuFloating extends React.Component {

  constructor () {
    super()
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter (inputFilter) {
    this.props.handleFilter && this.props.handleFilter(inputFilter)
  }

  render() {
    return (
      <div className={styles.MenuFloating}>
        <MenuLine theme="dark" handleFilter={this.handleFilter} inputFilter={this.props.inputFilter}/>
        <div className={styles.backgroundGradient} />
      </div>
    );
  }
}
