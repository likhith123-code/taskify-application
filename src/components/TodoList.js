import React, { Component } from 'react';
import Item from './TodoItem';
export default class TodoList extends Component{
    render(){
        return(
            <div>
                <p>list</p>
                <Item/>
            </div>
        )
    }
}