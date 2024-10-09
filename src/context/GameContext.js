import React from "react";

const GameContext=React.createContext({
    arr:[{id:1,ques:'Capital of India',opt:['New Delhi','Mumbai','Pune','Goa'],crct:'New Delhi',isAnswered:false},
{id:2,ques:'Capital of Goa',opt:['New Delhi','Panaji','Pune','Goa'],crct:'Panaji',isAnswered:false},
{id:3,ques:'Capital of up',opt:['New Delhi','Panaji','Lucknow','Goa'],crct:'Lucknow',isAnswered:false},
{id:4,ques:'Capital of uk',opt:['New Delhi','Panaji','Pune','Dehradun'],crct:'Dehradun',isAnswered:false},
{id:5,ques:'Capital of assam',opt:['Dispur','Panaji','Pune','Goa'],crct:'Dispur',isAnswered:false}
],
    updFunc:()=>{},
    player:''    ,
    modNam:()=>{}
})

export default GameContext