import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

userName:string="";
password:string="";
loginShow:boolean=false;

constructor(private router:Router) { }


login(){
  if(this.userName == "admin" && this.password == "2255"){
    this.loginShow = true
    this.router.navigate(['/home'])
  }else{
    alert("Invalid username or password")
  }
}

}
