import uniqid from 'uniqid' 
import React from 'react';
import { RestInput, RestTextArea, RestButton } from 'src/components'
import styles from './AddDishModal.module.scss';

export default class AddDishModal extends React.Component {

  constructor () {
    super()
    this.state = {
      id: uniqid(),
      dishName: '',
      dishDescription: '',
      ingredients: []
    }
    this.handleInputDishName = this.handleInputDishName.bind(this)
    this.handleInputDishDescription = this.handleInputDishDescription.bind(this)
    this.addNewIngredient = this.addNewIngredient.bind(this)
    this.handleInputIngredient = this.handleInputIngredient.bind(this)
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this)
    this.handleAddDish = this.handleAddDish.bind(this)
  }

  handleInputIngredient (value, key, ingredient) {
    const ingredientIndex = this.state.ingredients.findIndex(ingr => ingr.id === ingredient.id)
    const newIngredient = {
      ...ingredient,
      [key]: value
    }
    const ingredients = [...this.state.ingredients]
    ingredients.splice(ingredientIndex, 1, newIngredient)
    this.setState({ ingredients })
  }

  handleInputDishName (dishName) {
    this.setState({ dishName })
  }

  handleInputDishDescription (dishDescription) {
    this.setState({ dishDescription })
  }

  handleRemoveIngredient (ingredient) {
    const ingredientIndex = this.state.ingredients.findIndex(ingr => ingr.id === ingredient.id)
    const ingredients = [...this.state.ingredients]
    ingredients.splice(ingredientIndex, 1)
    this.setState({ ingredients })
  }

  handleAddDish () {
    const dishes = this.props.store.getValue('dishesList')
    const dishesList = [...dishes]
    dishesList.push({
      id: this.state.id,
      dishName: this.state.dishName,
      dishDescription: this.state.dishDescription,
      ingredients: this.state.ingredients
    })
    this.props.store.setValue('dishesList', dishesList)
    this.props.modalStorage.clear()
  }

  addNewIngredient () {
    this.setState({
      ingredients: [...this.state.ingredients, {
        name: '',
        weight: '',
        id: uniqid()
      }]
    })
  }

  render() {
    const ingredientsCount = this.state.ingredients.length
    const summaryWeight = this.state.ingredients.reduce((acc, ingr) => {
      const ingrWeight = Number(ingr.weight)

      if (!Number.isNaN()) {
        return acc + ingrWeight
      }
      return acc
    }, 0)
    return (
      <div className={styles.addDishModal}>
        <div className={styles.dishModalContent}>
          <div className={styles.topContent}>
            <div
              className={styles.dishName}
            >{this.state.dishName ? this.state.dishName : 'Add a new dish'}</div>
            <div
              className={styles.dishDescription}
            >{this.state.dishDescription ? this.state.dishDescription : 'Please enter all informations about your new dish'}</div>
            <RestInput
              className={styles.nameInput}
              placeholder="Dish name"
              value={this.state.dishName}
              handleInput={this.handleInputDishName}
            >
              <div className={styles.rightPart}>
                <span>Max, 50 Ch</span>
              </div>
            </RestInput>
            <RestTextArea
              className={styles.descriptionInput}
              placeholder="Dish description"
              value={this.state.dishDescription}
              handleInput={this.handleInputDishDescription}
            >
              <div className={styles.rightPart}>
                <span>Max. 150 Ch</span>
              </div>
            </RestTextArea>
            <div className={styles.ingredientsHeader}>
              <span>Ingredients</span>
              <RestButton
                mode="transparent"
                handleClick={this.addNewIngredient}
              >
                <div className={styles.buttonContent}>
                  <label>Add a new ingredient</label>
                  <img className={styles.buttonIcon} alt="Plus" src="/assets/icons/plus-orange.png" />
                </div>
              </RestButton>
            </div>
            <div className={styles.ingredientsList}>
              {
                this.state.ingredients.map(ingredient =>
                  (
                    <div className={styles.ingredientsListRow} key={ingredient.id}>
                      <img alt="Menu" className={styles.preRowIcon} src="/assets/icons/menu.png" />
                      <RestInput
                        className={styles.ingredientNameInput}
                        placeholder="Ingredient name"
                        value={ingredient.name}
                        handleInput={name => this.handleInputIngredient(name, 'name', ingredient)}
                      >
                        <div className={styles.ingredientNameInputRightPart}>
                          <img alt="Plus" className={styles.plusIngredientIcon} src="/assets/icons/plus-dark.png" />
                        </div>
                      </RestInput>
                      <RestInput
                        className={styles.ingredientWeightInput}
                        placeholder="Weight (Kcl)"
                        value={ingredient.weight}
                        handleInput={weight => this.handleInputIngredient(weight, 'weight', ingredient)}
                      />
                      <div className={styles.removeIngredient} onClick={e => this.handleRemoveIngredient(ingredient)}>
                        <img
                          alt="Trash"
                          className={styles.removeIngredientIcon}
                          src="/assets/icons/trash.png"
                        />
                      </div>
                    </div>
                  )
                )
              }
            </div>
          </div>
          {
            ingredientsCount === 0
              ? <div className={styles.ingredientsStatLineStub} />
              : (
                <div className={styles.ingredientsStatLine}>
                  <div className={styles.statContent}>
                    <div className={styles.leftStatPart}>
                      <span><b>{ingredientsCount} Ingredients</b> in your dish</span>
                    </div>
                    <div className={styles.rightStatPart}>
                      <span>Total weight : <b>{summaryWeight} Kcl</b></span>
                    </div>
                  </div>
                </div>
              )
          }
          {
            ingredientsCount === 0
              ? <div className={styles.sumbitButtonStub} />
              : (
                <RestButton className={styles.sumbitButton} handleClick={this.handleAddDish}>
                  <div className={styles.sumbitButtonContent}>
                    <div className={styles.submitInfo}>
                      <span className={styles.submitLabel}>Add this dish to my menu</span>
                      <span>{summaryWeight} Kcl</span>
                    </div>
                    <img alt="Plus" className={styles.addIcon} src="/assets/icons/plus.png" />
                  </div>
                </RestButton>
              )}
        </div>
      </div>
    );
  }

}
