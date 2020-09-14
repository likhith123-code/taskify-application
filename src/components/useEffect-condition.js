import React,{useState,useEffect} from 'react';

const useEffectHooks = () =>{
    const [name,changeHandler] = useState({firstname:" "})
    const [count,countHandler] = useState(0)

    // use Effect is used instead of DidMount and DidUpdate
    // whenever count is changed then only usestate called
    //conditional using of DidUpdate - when input changed dont call , when count changed only called
    useEffect(()=>{
       alert("Mounted Sucessfully")

    },[count])
    // if count not used that message will be called when name changed also
    /*
    in normal clasess pass prevState as param to didupdate and check this.state.count===prevState.count

    */
    return(
        <div>
            Enter Name : <input name="name" 
            onChange={(e)=>changeHandler({...name,firstname:e.target.value})} value={name.firstname} />
            <button onClick={()=>countHandler(count+1)}>Increment {count}</button>

        </div>
    )
}

export default useEffectHooks;