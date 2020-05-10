import React from 'react';
import { pytania } from "./pytania";

export class Question extends React.Component{
 
  render(){
  
  return (
    <div className="question-container">
    <div><h1>Pytanie {this.props.value+1}:</h1></div>
    <div className="question-text">{pytania[this.props.value].question}</div>
    <div className="answer1 answer" onClick={this.props.onAnswer} id="A">{pytania[this.props.value].answer1}</div>
    <div className="answer2 answer" onClick={this.props.onAnswer} id="B">{pytania[this.props.value].answer2}</div>
    <div className="answer3 answer" onClick={this.props.onAnswer} id="C">{pytania[this.props.value].answer3}</div>
    <div className="answer4 answer" onClick={this.props.onAnswer} id="D">{pytania[this.props.value].answer4}</div>
  </div>);
  }
};
