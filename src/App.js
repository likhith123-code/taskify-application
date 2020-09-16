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
  componentDidUpdate(){
    const json=JSON.stringify(this.state.items);
    localStorage.setItem('data',json);
 }
componentDidMount(){
  if (localStorage.getItem('data')) {
    const newData =  JSON.parse(localStorage.getItem('new'));
    this.setState({
      items:newData
  })
}

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
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filt=this.state.items.filter((item)=>item.id!=id);
    this.setState({
      items:filt
    })
  }
  handleEdit=(id)=>{
    const filt=this.state.items.filter((item)=>item.id!=id);
    const selectedItem=this.state.items.find(item=>item.id===id)
    this.setState({
      items:filt,
      item:selectedItem.title,
      id:id,
      editItem:true
    })
  }
 render(){
  return (
    <div className="Container">
      <div className="row">
        <div className="col-10 col-md-8 mt-5 mx-auto">
          <h3 className="text-capitalize text-center">Task Management Application</h3>
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
