import React from "react";
import {QRCodeSVG} from 'qrcode.react';




const QuestionDisp=(props)=>{

    const {obj}=props
    const {id,ques,opt,crct}=obj

    const qurl=`http://192.168.1.38:3000/game/${id}`

    return (
        <li>
          <p> {ques} </p>
          <QRCodeSVG value={qurl}/>
          <div>
            <span> A. </span>
            <label htmlFor="op1"> {opt[0]} </label>
          </div>
          <div>
            <span> B. </span>
            <label htmlFor="op2"> {opt[1]} </label>
          </div>
          <div>
            <span> C. </span>
            <label htmlFor="op3"> {opt[2]} </label>
          </div>
          <div>
            <span> D. </span>
            <label htmlFor="op4"> {opt[3]} </label>
          </div>
        </li>
    )
            
}

export default QuestionDisp