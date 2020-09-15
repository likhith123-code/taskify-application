import React from 'react';
import './App.css';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  return (
    <div className="App">
     <h1>Hello </h1>
     <div className="container">
       <div className="row">
         
         <TodoInput/>
         <TodoList/>
         
       </div>
     </div>
    </div>
  );
}

export default App;
