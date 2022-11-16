import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a = '';
  b = '';
  data = new Map();
  constructor() {    
    this.data.set("ritikpoonia","1234");
  }

  validate(){
    if(this.data.has(this.a)){
      if(this.data.get(this.a) == this.b){
        if(this.a == 'ritikpoonia'){
          document.getElementById('Registration')?.click()
        }
      }
      else{
        alert("Password Incorrect");
      }
    }
    else{
      alert("Username Invalid");
    }
  }

  ngOnInit(): void {
  }

}
