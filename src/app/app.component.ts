import { Component } from '@angular/core';
import { Employee } from './models/employee'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';
  employeeArray:Employee[] = [
    {id:1,name:"Ryan",country:"Perú"},
    {id:2,name:"Angelica",country:"Perú"},
    {id:3,name:"Joe",country:"Perú"}
  ]

  selectedEmployee:Employee = new Employee(0,"","")

  clearSelectedEmployee(){
    this.selectedEmployee = new Employee(0,"","")
  }

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1
      this.employeeArray.push(this.selectedEmployee)
    }
    this.clearSelectedEmployee()
  }

  openEdit(employee:Employee){
    this.selectedEmployee = employee
  }

  delete(){
    if(confirm('Are you sure want to delete it')){
      this.employeeArray = this.employeeArray.filter(e=>e.id!==this.selectedEmployee.id)
      this.clearSelectedEmployee()
    }
  }

}