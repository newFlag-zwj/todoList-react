import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  deleteItem = (id) => {
    return () => {
        if(window.confirm('确定删除？')) {
            this.props.deleteItem(id)
        }
    }
  }

  handleClick = (id) => {
      return (event) => {
         this.props.updateItem(id, event.target.checked)
      }
  }

  render() {
    const {item} = this.props
    return (
      <li className="todo-item">
        <input type="checkbox" checked={item.done} id={item.id} onChange={this.handleClick(item.id)}/>
        <label htmlFor={item.id}>
          <span>{ item.text}</span>
        </label>
        <button onClick={this.deleteItem(item.id)}>删除</button>
      </li>
    )
  }
}
