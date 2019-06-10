import React from 'react';
import './App.css';
import './reset.css';
import store from 'storejs'
import Header from './pages/header'
import DoingList from './pages/doingList'
import DoneList from './pages/doneList'

class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      arr: [],
      doneArr: []
    }
  }
  doingDel(index) {
    this.state.arr.splice(index, 1)
    this.setState({
      arr: this.state.arr
    })
    store.set('list', this.state.arr)
  }
  doneDel(index) {
    this.state.doneArr.splice(index, 1)
    this.setState({
      doneArr: this.state.doneArr
    })
    store.set('doneList', this.state.doneArr)
  }

  add(e) {
    let txt = this.refs.addDOM.refs.add;
    if (e.keyCode === 13) {
      if (txt.value.trim() === '') return
      this.state.arr.push(txt.value)
      this.setState({
        arr: this.state.arr
      })
      store.set('list', this.state.arr)
      txt.value = ''
    }
  }
  toDone(index, e) {
    e = window.event;
    e.preventDefault();
    let item = this.state.arr.splice(index, 1)
    this.state.doneArr.unshift(item[0])
    this.change()
  }
  toDoing(index) {
    let item = this.state.doneArr.splice(index, 1)
    this.state.arr.push(item[0])
    this.change()
  }
  change() {
    this.setState({
      arr: this.state.arr,
      doneArr: this.state.doneArr
    })
    store.set('list', this.state.arr)
    store.set('doneList', this.state.doneArr)
  }
  componentDidMount() {
    this.setState({
      arr: store.get('list'),
      doneArr: store.get('doneList') || []
    })
  }

  render() {
    return (
      <div className="App">
        <Header parent={this} ref='addDOM'></Header>
        <div className="content">
          <div className="container">
            <DoingList list={this.state.arr} parent={this}></DoingList>         <DoneList list={this.state.doneArr} parent={this}></DoneList>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
