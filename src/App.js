import React,{useState} from "react";
import { Route,Routes } from "react-router-dom";
import Game from "./components/Game";
import Form from "./components/Form";
import GameContext from "./context/GameContext";
import SeperateQues from "./components/SeperateQues";


const App=()=>{

const [arr,setArr]=useState([{id:1,ques:'Capital of India',opt:['New Delhi','Mumbai','Pune','Goa'],crct:'New Delhi',isAnswered:false},
    {id:2,ques:'Capital of Goa',opt:['New Delhi','Panaji','Pune','Goa'],crct:'Panaji',isAnswered:false},
    {id:3,ques:'Capital of up',opt:['New Delhi','Panaji','Lucknow','Goa'],crct:'Lucknow',isAnswered:false},
    {id:4,ques:'Capital of uk',opt:['New Delhi','Panaji','Pune','Dehradun'],crct:'Dehradun',isAnswered:false},
    {id:5,ques:'Capital of assam',opt:['Dispur','Panaji','Pune','Goa'],crct:'Dispur',isAnswered:false}
    ])

const [player,setPlayer]=useState('')

const modNam=(recName)=>{
    setPlayer(recName)
}

const updFunc=(cid)=>{
    console.log(cid)
  const modArr=arr.map((i)=>{
    if (i.id==cid){
        return {...i,isAnswered:true}
    }
    else{
        return i 
    }
  })
  setArr(modArr)

}

return (
    <GameContext.Provider
     value={{arr,updFunc}}
    >
        <Routes>
          <Route path="/" element={<Game/>}/>
          <Route path="/game/:quesId" element={<SeperateQues/>}/>
        </Routes>
    </GameContext.Provider>
)
}

export default App