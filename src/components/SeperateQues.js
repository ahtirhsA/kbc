import React, { useContext,useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import GameContext from "../context/GameContext";

const SeperateQues=()=>{

    const {quesId}=useParams()

    const navigate=useNavigate()


    const {arr,updFunc}=useContext(GameContext)

    const fobj=arr.find((i)=>i.id==quesId)
 
    const {id,ques,opt,crct}=fobj

    const [rad,setRad]=useState('')

    useEffect(() => {
      console.log("Updated array:", arr);
  }, [arr]); 

    const radiFunc=(event)=>{
       setRad(event.target.value)
    }

    const subFunc=()=>{
      if (crct==rad){
        alert('Congratulations')
        updFunc(quesId)
        console.log(arr)
        const nextUnanswered = arr.find((i) => i.isAnswered === false);
        console.log(nextUnanswered)
        if (!nextUnanswered) {
            alert('Completed all questions!!!');
        } 
        else {
            navigate(`/game/${nextUnanswered.id}`);
        }

      }
    }

  return(
       <div>
        <p> {ques} </p>
          <div>
            <span> A. </span>
            <input type="radio" value={opt[0]} name={id} id="opt1" onChange={radiFunc}/>
            <label htmlFor="opt1"> {opt[0]} </label>
          </div>
          <div>
            <span> B. </span>
            <input type="radio" value={opt[1]} name={id} id="opt2" onChange={radiFunc}/>

            <label htmlFor="opt2"> {opt[1]} </label>
          </div>
          <div>
            <span> C. </span>
            <input type="radio" value={opt[2]} name={id} id="opt3" onChange={radiFunc}/>

            <label htmlFor="opt3"> {opt[2]} </label>
          </div>
          <div>
            <span> D. </span>
            <input type="radio" value={opt[3]} name={id} id="opt4" onChange={radiFunc}/>
            <label htmlFor="opt4"> {opt[3]} </label>
          </div>

          <button onClick={subFunc}> Submit </button>
       </div>
  )
}

export default SeperateQues