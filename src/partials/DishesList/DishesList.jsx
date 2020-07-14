import uniqid from 'uniqid'
import React from 'react'
import { RestButton } from 'src/components'
import { DishCard } from 'src/partials'
import { AddDishModal } from 'src/modals'
import styles from './DishesList.module.scss'

export default class DishesList extends React.Component {

  constructor () {
    super()
    this.addNewDish = this.addNewDish.bind(this)
  }

  addNewDish () {
    this.props.modalStorage.open({
      id: uniqid(),
      element: <AddDishModal />,
      data: {
        dishesList: this.props.dishesList
      }
    })
  }

  render() {
    return (
      <div className={styles.dishesListRoot}>
        <div className={styles.dishesList}>
          <div className={styles.listHeader}>
            <div className={styles.listHeaderLeft}>
              <div className={styles.leftMarker} />
              <div className={styles.rightText}>
                <h2>Meat Dishes</h2>
                <h3>Some of the best meat dishes from worldwide</h3>
              </div>
            </div>
            <div className={styles.listHeaderRight}>
              <RestButton handleClick={this.addNewDish}>
                <div className={styles.buttonContent}>
                  <label>Add a new dish</label>
                  <img className={styles.buttonIcon} alt="Plus" src="/assets/icons/plus.png" />
                </div>
              </RestButton>
            </div>
          </div>
          <div className={styles.dishes}>
            {
              this.props.dishesList.map(dish => <DishCard dish={dish} key={dish.id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}