import React,{useContext, useState} from "react";
import GameContext from "../context/GameContext";

const Form=()=>{

    const [name,setName]=useState('')

    const {modNam}=useContext(GameContext)

    const formUrl=`${window.location.origin}/form`

    const nameFunc=(event)=>{
      setName(event.target.value)
    }

    const subFunc=(event)=>{
        event.preventDefault()
        modNam(name)
        

    }

   return (
     <form onSubmit={subFunc}>
        <div>
        <label id="name"> Enter Your Name</label>
        <br/>
        <input type="text" placeholder="Enter your name" id="name" value={name} onChange={nameFunc}/>
        </div>
        <button type="submit"> Enter </button>
     </form>
   )
}

export default Form