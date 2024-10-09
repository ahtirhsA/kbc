import React,{useContext, useState} from "react";
import QuestionDisp from './QuestionDisp'
import GameContext from "../context/GameContext";

/*let arr=[{id:1,ques:'Capital of India',opt:['New Delhi','Mumbai','Pune','Goa'],crct:'New Delhi'},
{id:2,ques:'Capital of Goa',opt:['New Delhi','Panaji','Pune','Goa'],crct:'Panaji'},
{id:3,ques:'Capital of up',opt:['New Delhi','Panaji','Lucknow','Goa'],crct:'Lucknow'},
{id:4,ques:'Capital of uk',opt:['New Delhi','Panaji','Pune','Dehradun'],crct:'Dehradun'},
{id:5,ques:'Capital of assam',opt:['Dispur','Panaji','Pune','Goa'],crct:'Dispur'}
]*/ 


const Game=()=>{

    const {arr}=useContext(GameContext)

  return(
    <ul>
       {
        arr.map((i)=><QuestionDisp obj={i} key={i.id}/>)
       }
    </ul>
  )
}

export default Game


/*
*/