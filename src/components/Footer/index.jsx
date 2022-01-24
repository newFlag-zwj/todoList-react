import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  checkAllHandle = (event) => {
    this.props.checkAll(event.target.checked)
  }

  render() {
    const {todoLists, deleteAllDone} = this.props
    // 已完成的
    const doneCount = todoLists.reduce((pre, current) => { return pre + (current.done ? 1 : 0)}, 0)
    // 全部事项
    const total = todoLists.length
    return (
      <div className="todo-footer">
        <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.checkAllHandle}/>
        <span className="list-info">已完成{doneCount}/全部{total}</span>
        <button onClick={deleteAllDone}>清除已完成的</button>
      </div>
    )
  }
}
