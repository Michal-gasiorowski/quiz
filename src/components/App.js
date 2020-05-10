import React from 'react';
import axios from 'axios';
import { QuestionsList } from './QuestionsList';

class App extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
    question: 0,
    name: 'Proszę podać imię',
    tempAnswers: [0,0,0,0,0,0,0,0,0,0],
    answers: '',
    time: 0,
    started: false,
    error: '',
    submited: false,
	}
  }

  handleSubmit = (event) => {
    if(this.state.tempAnswers.find(n => n === 0) !== 0){
    
    //console.log('test')
    event.preventDefault();
    axios({
      method: "POST", 
      url:"http://michalgasiorowski.pl/quiz/results.php", 
      data:  this.state
    }).then((response)=>{
      //console.log(response)
      if (response.statusText === 'OK'){
        //alert("Wysłano odpowiedzi!"); 
        //this.resetForm()
      }else{
        alert("Failed")
      }
    })
    this.setState({submited: true})  
    }else{
      event.preventDefault();
      alert("Odpowiedz na wszystkie pytania!")
    }
  }



  handleStart = () => {
    if(this.state.name !== 'Proszę podać imię' && this.state.name !== ''){
    
    setInterval(() => { 
      let time=this.state.time;
      this.setState({time: time + 1}) 
    }, 1000);
    
    this.setState({
      started: true,
      error: '',
    })



    }else{
      this.setState({error: 'Proszę podać imię!'})
    }
  }
  
  handleQuestion = (event) => {
     this.setState({question: event})
  }

  

  handleAnswer = (event) => {
    
    let temp = this.state.tempAnswers.slice();
    temp[this.state.question] = event.target.id;
    this.setState({ tempAnswers: temp},()=>{
    //tu
    temp = temp.join(",");
    let question = this.state.question;
    
    if (question < 9){
      question++;
    }
    this.setState({ 
      answers: temp,
      question: question,
    })
    })
  }

  onNameChange = (event) => {
	this.setState({name: event.target.value})
  }

  onNameClick = (event) => {
    this.setState({name: ''})
  }

  render() {
	if (this.state.submited !== true) {return(
  	
    <div className="App">
    
    <QuestionsList 
    value={this.state.question} 
    onClick={this.handleQuestion.bind(this)} 
    onAnswer={this.handleAnswer.bind(this)} 
    started={this.state.started} 
    onChange={this.onNameChange.bind(this)} 
    name={this.state.name} 
    error={this.state.error}
    tempAnswers={this.state.tempAnswers}
    />

    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	{this.state.started === false &&
     <div className="btn-container">
       <button type="button" className="btn" onClick={this.handleStart.bind(this)}>Start</button>
       
      	<label htmlFor="name">Imię: </label>
      	<input type="text" className="form-name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} onClick={this.onNameClick.bind(this)} />
        {this.state.error !== '' &&
        <p>{this.state.error}</p>
        }
  	  
    </div>
    }
    {this.state.started === true && this.state.submited === false &&
    <div className="btn-container"><button type="submit" className="btn">Wyślij</button></div>
    }
  	</form>
  	</div>
	);}else{return(<h1>Dziękujemy za wypełnienie quizu!</h1>)}
  }
  
 


}

export default App;

