import React from 'react';
import { pytania } from "./pytania";

export const Question = (props) => {
  let value = props.value;
  
  return (<div className="question-container">
    <div><h1>Pytanie {value + 1}:</h1></div>
    <div className="question-text">{pytania[value].question}</div>
    <div className="answer1 answer" onClick={props.onAnswer} id="A">{pytania[value].answer1}</div>
    <div className="answer2 answer" onClick={props.onAnswer} id="B">{pytania[value].answer2}</div>
    <div className="answer3 answer" onClick={props.onAnswer} id="C">{pytania[value].answer3}</div>
    <div className="answer4 answer" onClick={props.onAnswer} id="D">{pytania[value].answer4}</div>
  </div>);
};
