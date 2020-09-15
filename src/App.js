import React from 'react';
import './App.css';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  state={
    items:[{id:1,title:"Wakeup"},{id:2,title:"Make breakfast"}],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange=(e)=>{

  }
  handleSubmit=(e)=>{

  }
  clearList=()=>{

  }
  handleDelete=(id)=>{

  }
  handleEdit=(id)=>{

  }
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
  );
}

export default App;
