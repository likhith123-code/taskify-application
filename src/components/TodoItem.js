import React, { Component } from 'react';

export default class TodoItem extends Component{
   
    render(){
        const {title,handleDelete,handleEdit}=this.props;
        return(
           <li className="list-group-item text-capitalize
           d-flex justify-content-between my-2">
               <h6>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-sucess">
                    <button onClick={handleEdit}>Edit</button>
                </span>
                <span className="mx-2 text-danger">
                <button onClick={handleDelete}>Delete</button>
                </span>
            </div>
           </li>
        )
    }
}