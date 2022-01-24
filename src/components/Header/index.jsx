import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 对传入的参数和方法进行限制
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // 判断回车键
    if (event.keyCode === 13) {
      if (event.target.value.trim() !== '') {
        // 添加待办事项
        let itemObj = { id: nanoid(), text: event.target.value, done: false }
        this.props.addItem(itemObj)
      } else {
        alert('输入框不能为空')
      }
      // 清空输入框
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="input-wrap">
        <input type="text" placeholder="请输入待办事件" onKeyUp={ this.handleKeyUp}/>
      </div>
    )
  }
}
