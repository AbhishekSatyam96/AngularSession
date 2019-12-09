import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abhi';
  firstName = 'Abhishek';
  firstId = 11;
  active = 'yes';
  buttonState = 'true';
  iname = '';
  flag = true;

  resetButton = () => {
    this.iname = '';
  };
  toggleFlag = () => {
    console.log(!this.flag);
    this.flag = !this.flag;
  };
  getColor = () => {
    if (this.flag === true)
      return 'green';
    else return 'red';
  };

  studentRoaster = ['Abhishek', 'Kumar', 'Satyam'];
  currentName = '';

  add = () =>{
    console.log(this.studentRoaster);
    this.studentRoaster.push(this.currentName);
    this.currentName = '';
  };
  state = true;
  counter = [];
  toggleDisplay(){
    this.state = !this.state;
    this.counter.push(this.counter.length + 1);
  };
  getLength(){
    console.log(this.counter.length);
    let len = this.counter.length;
    if(len > 4){
      return 'blue';
    }
    else{
      return 'black';
    }
    
//    if(this.counter.length() > 5){
//    return 'blue';}
//    else{ return 'yellow';}
  };
  name1 = 'Satyam';
}
