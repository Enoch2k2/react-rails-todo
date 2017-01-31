import React, { Component } from 'react';
import 'whatwg-fetch';
import Item from './components/Item'
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      todo: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.getState = this.getState.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  changeTodo(e){
    e.preventDefault();
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const {todo} = this.state;

    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: todo
      })
    }).then(res => res.json()).then(json => this.addTodo(json))
  }

  addTodo(todo){
    let updateItems = [...this.state.items]

    updateItems.push(todo);

    this.setState({
      items: updateItems
    })
  }

  getState(){
    this.state;
  }

  handleClick(id){

    const todo = fetch('/api/items/toggle/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    }).then(res => res.json()).then(json => this.updateItems(json))
  }

  updateItems(todo){
    let items = [...this.state.items]

    const updatedItems = items.map((item, i) => {
      if(item.name == todo.name){
        return todo
      } else {
        return item
      }
    })

    console.log(items)

    this.setState({
      items: updatedItems,
      todo: ''
    })
  }

  componentDidMount(){
    fetch('/api/items')
      .then(res => res.json())
      .then(json => this.setState({items: json}))
  }

  render() {
    const {items, todo} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo</h2>
        </div>
        <h2>Incomplete</h2>
        <ul>
          {items.map((item, index) => {
            return !item.completed ? <Item index={index} item={item} handleClick={this.handleClick}/> : null
          })}
        </ul>
        <h2>Complete</h2>
        <ul>
          {items.map((item, index) => {
            return item.completed ? <Item index={index} item={item} handleClick={this.handleClick}/> : null
          })}
        </ul>

        <Form handleSubmit={this.handleSubmit} changeTodo={this.changeTodo} todo={todo}/>
      </div>
    );
  }
}

export default App;
