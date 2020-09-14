import React,{useState} from 'react';
//hooks work only in functional components

//use spread operator in objects and arrays
const ObjArrHook = () =>{
    const [names,changeName] = useState({firstName:" ",lastName:" "})
    const [places,changePlace] = useState([])
    const changed = (e)=>{
        changeName({...names,firstName:e.target.value}) //use spread Operator
    }
    const addplace = () =>{
        changePlace([...places,{name:"Hyderabad"}]) //first use spread operatot
    }
    return(
        <div>
            FirstName : <input name="name" onChange={changed} value={names.firstName} /> <br/>
            LastName : <input name="lastname" onChange={(e)=>changeName({...names,lastName:e.target.value})} value={names.lastName} />
            <br/>
            <p>Details <br/> FirstName : {names.firstName} <br/> LastName : {names.lastName}</p>
            Place : <button onClick={addplace} >Add Place</button>
            <ul>
            {places.map(p=>(
                <li>{p.name}</li>
            ))}
            </ul>
           
        </div>
    )
}
export default ObjArrHook;