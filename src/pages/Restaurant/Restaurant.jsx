import uniqid from 'uniqid' 
import React from 'react';
import { Menu, MenuFloating, DishesList } from 'src/partials'
import styles from './Restaurant.module.scss'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFloatMenuVisible: false,
      dishesList: [],
      inputFilter: ''
    }
    this.menuRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this)
    this.handleUpdateDishes = this.handleUpdateDishes.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleInfiniteScrolling = this.handleInfiniteScrolling.bind(this)
  }

  handleFilter (inputFilter) {
    this.setState({
      inputFilter
    })
  }

  render() {
    const currentList = this.state.dishesList.filter(dish => {
      if (!this.state.inputFilter) {
        return true
      }
      const value = this.state.inputFilter.toLowerCase()
      const isFilterName = dish.dishName.toLowerCase().includes(value)
      const isFilterIngredient = dish.ingredients.filter(ingr => ingr.name.toLowerCase().includes(value)).length > 0
      return isFilterName || isFilterIngredient
    })
    return (
      <main className={styles.restaurantPage}>
        <Menu menuRef={this.menuRef} handleFilter={this.handleFilter} inputFilter={this.state.inputFilter}/>
        { this.state.isFloatMenuVisible &&
          <MenuFloating handleFilter={this.handleFilter} inputFilter={this.state.inputFilter} /> }
        <DishesList dishesList={currentList} modalStorage={this.props.modalStorage}/>
      </main>
    );
  }
  handleUpdateDishes (dishesList) {
    this.setState({ dishesList })
  }
  handleScroll () {
    const html = document.getElementsByTagName('html')[0]
    const scrollPosition = html.scrollTop
    const menuHeight = this.menuRef.current.clientHeight
    this.setState({ isFloatMenuVisible: scrollPosition >= (menuHeight - 110) })
    this.handleInfiniteScrolling(html)
  }
  handleInfiniteScrolling (html) {
    if (this.state.dishesList.length > 0 &&
      html.scrollHeight - (html.scrollTop + html.clientHeight) <= 20) {
      const dishesList = this.state.dishesList.concat(this.state.dishesList.map(dish => ({
        ...dish,
        id: uniqid()
      })))
      this.setState({ dishesList })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const dishesList = this.props.store.getValue('dishesList')
    this.props.store.subscribe('dishesList', this.handleUpdateDishes)
    if (dishesList && dishesList.length > 0) {
      this.setState({ dishesList })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}