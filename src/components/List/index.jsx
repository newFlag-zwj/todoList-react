import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对传入的参数和方法进行限制
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
    todoLists: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  render() {
    const {todoLists, updateItem, deleteItem} = this.props
    return (
      <ul>
        {todoLists.map((item) => {
          return <Item item={item} key={item.id} updateItem={updateItem} deleteItem={deleteItem}/>
        })}
      </ul>
    )
  }
}
