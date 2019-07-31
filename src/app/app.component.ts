import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  timeLeft=60;
  interval;
  gameMenu=true;
  gameStart=false;
  gameFinished=false;
  answer: string;
  equation = "";
  solution = 0;
  score = 0;
  inputBox='';
  playagain=false;

  onKey(event) {
    const inputValue = event.target.value;
    // console.log(event.target.value);
    if (inputValue==this.solution){
      this.score++;
      this.setEquation()
      this.inputBox='';
    }
    }

    playAgain(){
      this.gameStart=false;
      this.gameFinished=false;
      this.playagain=false;
      this.gameMenu=true;
      this.timeLeft=60;
    }

  setEquation(){
    let type = Math.floor((Math.random() * 4) + 1);
    var num1 = 0;
    var num2 = 0;
    if (type<3){
      num1 = Math.floor((Math.random() * 100) + 1);
      num2 = Math.floor((Math.random() * 100) + 1);
    }
    else{
      num1 = Math.floor((Math.random() * 12) + 1);
      num2 = Math.floor((Math.random() * 12) + 1);
    }
    switch(type) {
      case 1:
    // addition
        this.solution = num1+num2;
        this.equation = num1.toString()+" + "+num2.toString();
      break;
      case 2:
    // subtraction
        this.solution = num1-num2;
        this.equation = num1.toString()+" - "+num2.toString();
      break;
      case 3:
    // division
        this.solution = num2;
        let divider = num1*num2;
        this.equation = divider.toString()+" / "+num1.toString();
      break;
      default:
    // multiplication
        this.solution = num1*num2;
        this.equation = num1.toString()+" * "+num2.toString();
    }
  }

  startTimer() {
    this.gameMenu=false;
    this.gameStart=true;
    this.setEquation();
    console.log("is: "+this.equation)
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        if (this.gameStart==true){
        this.gameStart=false;
        this.gameFinished=true;
        clearInterval(this.interval);
        }
      }
    },1000)
  }
  

}
