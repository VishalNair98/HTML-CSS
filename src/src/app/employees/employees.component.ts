import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public id:number;
  public name:string="";
  public sal:number;
  public dept:string="";
  employees=[
    {
    id:100,name:"Vishal",sal:278,dept:"hr"
  }

  ]
  constructor(){}
  display(){
  alert(this.id+" "+this.name+" "+this.sal+" "+this.dept+" ");
  }

  

  ngOnInit() {
  }
  addDetails(){
    this.employees.push(
      {
        id:this.id,
        name:this.name,
        sal:this.sal,
        dept:this.dept
      }
     );
    }
    delete(data){
      let ind:number=this.employees.indexOf(data);
      this.employees.splice(ind,1);
    }
    update(data){
      let ind:number=this.employees.indexOf(data);
      this.employees.splice(ind,1);
      this.employees.push({
        id:this.id,
        name:this.name,
        sal:this.sal,
        dept:this.dept
      });
    }


}
