import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newitem={
      id:this.state.id,
      title:this.state.item
    } 
    const updatedItems=[...this.state.items,newitem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    });
  }
  clearList=()=>{

  }
  handleDelete=(id)=>{

  }
  handleEdit=(id)=>{

  }
 render(){
  return (
    <div className="Container">
      <div className="row">
        <div className="col-10 col-md-8 mt-5 mx-auto">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput 
          item={this.state.item}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          editItem={this.editItem}/>
          <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
        </div>
      </div>
      
    </div>
  )
 }
}

export default App;
