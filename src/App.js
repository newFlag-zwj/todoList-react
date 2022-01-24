import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  // 添加待办事项
  addItem = (itemInfo) => {
    let { todoLists } = this.state
    let newList = [itemInfo, ...todoLists]
    this.setState({todoLists: newList})
  }

  // 更新待办事项状态，在item中调用
  updateItem = (id,done) => {
    let {todoLists} = this.state
    let newTodoLists = todoLists.map((item) => {
      if(item.id === id) return {...item, done}
      else return item
    })

    this.setState({todoLists: newTodoLists})
  }

  // 删除待办事项
  deleteItem = (id) => {
    let {todoLists} = this.state
    // todoLists.forEach((item, index) => {
    //   if(item.id === id) todoLists.splice(index, 1)
    // })
    let newTodoLists = todoLists.filter((item) => {
      return item.id !== id
    })
    this.setState({todoLists: newTodoLists})
  }

  // 全选与全不选
  checkAll = (status) => {
    console.log(status)
    let {todoLists} = this.state
    let newTodoLists = todoLists.map((item) => {
      return {...item, done:status}
    })
    this.setState({todoLists: newTodoLists})
  }

  // 清除所有已完成的
  deleteAllDone = () => {
    let {todoLists} = this.state
    let newTodoLists = todoLists.filter((item) => {
      return item.done !== true
    })

    this.setState({todoLists: newTodoLists})
  }
  state = {
    todoLists: [
      {id: 1, text: '吃饭', done: false},
      {id: 2, text: '喝水', done: true},
      {id: 3, text: '睡觉', done: false}
    ]
  }

  render() {
    const {todoLists} = this.state
    return (
      <div className="todo-wrap">
        <Header addItem={ this.addItem}/>
        <List todoLists={todoLists } updateItem={this.updateItem} deleteItem={this.deleteItem}/>
        <Footer todoLists={todoLists} checkAll={this.checkAll} deleteAllDone={this.deleteAllDone}/>
      </div>
    )
  }
}
