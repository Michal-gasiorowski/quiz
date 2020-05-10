import React from 'react';
import { Question } from './Question';
import { pytania } from "./pytania";

export const QuestionsList = (props) => {
 
  let listItems = [];
     for (let i=0; i < pytania.length; i++){
         listItems.push(i);
     }
     const buttons = listItems.map(i => 
      <div key={i} className="question" onClick={props.onClick} id={i+1}>Pytanie {i+1} {props.tempAnswers[i] !== 0 && <b>odp: {props.tempAnswers[i]}</b>}</div>
       ) 
 
 return (<div className="main">
    {props.started === true &&
      <div className="question-list">
        {buttons}
      </div>}
    {props.started === true &&
      <div className="main-question">
        <Question value={props.value} onAnswer={props.onAnswer} />
      </div>}

  </div>);
};

