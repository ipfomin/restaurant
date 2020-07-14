import React from 'react';
import styles from './DishCard.module.scss';

export default class DishCard extends React.Component {
  render() {
    const dish = this.props.dish
    const ingredientsLength = dish.ingredients.length
    const summaryWeight = dish.ingredients.reduce((acc, ingr) => {
      const ingrWeight = Number(ingr.weight)
      if (!Number.isNaN()) {
        return acc + ingrWeight
      }
      return acc
    }, 0)
    return (
      <div className={styles.dishCardRoot}>
        <div className={styles.categoryInfo}>
          <span>{ingredientsLength} Ingredients</span>
          <span>{summaryWeight} KCL</span>
        </div>
        <div className={styles.nameField}>
          <div className={styles.marker} />
          <div className={styles.dishName}>
            {dish.dishName}
          </div>
        </div>
        <div className={styles.dishDescription}>
          {dish.dishDescription}
        </div>
      </div>
    );
  }
}