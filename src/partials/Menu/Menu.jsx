import React from 'react';
import MenuLine from './MenuLine'
import styles from './Menu.module.scss'

export default class Menu extends React.Component {

  constructor () {
    super()
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter (inputFilter) {
    this.props.handleFilter && this.props.handleFilter(inputFilter)
  }

  render() {
    return (
      <section className={styles.restMenu} ref={this.props.menuRef}>
        <MenuLine handleFilter={this.handleFilter} inputFilter={this.props.inputFilter}/>
        <div className={styles.labelWrapper}>
          <h1>Menu</h1>
        </div>
      </section>
    );
  }
}
