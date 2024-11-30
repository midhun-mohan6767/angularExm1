import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

employee:any[] =[];
newEmplayee :any = { name:"",contact :"",email:"",address:""}


addemployee(){
  this.employee.push({...this.newEmplayee});
  this.newEmplayee= {name:"",contact:"",email:"",address:""}
}

}