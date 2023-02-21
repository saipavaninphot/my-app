import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public name:string="";
  public Dob:string="";
  public education:string="";
  public isplaced:boolean=true;
  public company:string="";
  public package:number=0;
  public term:string="";
  public term1:string="";
  public students:any=[
    {name:'sai',Dob:'5-8-1994',education:'b-tech',isplaced:true,company:'wipro',package:120000},
    {name:'siri',Dob:'10-12-1996',education:'degree',isplaced:false,company:'google',package:130000},
    {name:'raju',Dob:'4-9-1992',education:'MBA',isplaced:true,company:'Hcl',package:120000},
    {name:'shiva',Dob:'18-12-1993',education:'degree',isplaced:false,company:'Tcs',package:130000},
    {name:'sathya',Dob:'5-6-1995',education:'b-tech',isplaced:true,company:'Infosys',package:120000},
    {name:'pooja',Dob:'1-12-1991',education:'degree',isplaced:false,company:'Accenture',package:130000},
  ];
  search(){
    this.students=this.students.filter((student:any)=> student.name.indexOf(this.term)!=-1);

  }
  search1(){
    this.students=this.students.filter((student:any)=> student.company.indexOf(this.term1)!=-1);
  }
  placed(){
    this.students=this.students.filter((student:any)=> student.isplaced==true)
  }
  notplaced(){
    this.students=this.students.filter((student:any)=> student.isplaced==false)

  }
  packagelh(){
    this.students = this.students.sort((a:any,b:any)=>a.package-b.package);
  }
  packagehl(){
    this.students = this.students.sort((a:any,b:any)=>b.package-a.package);
  }
  reduce(){
    this.students=this.students.map((student:any) =>{
      student.package = student.package-90000;
      return student;

    })
  }
  bonus(){
    this.students=this.students.map((student:any)=>{
    
        student.package=student.package+50000;
      
      return student;
    });
  }
  package1(){
    var total=this.students.reduce((sum:any,student:any)=> sum+student.package,0);
    alert("total package is"+total);
  }
  student(){
    alert("total no of student"+this.students.length);

  }
  add(){
    var student={
      
      name:this.name,
      Dob:this.Dob,
      package:this.package,
      isplaced:this.isplaced,
      company:this.company,
      education:this.education,

      
    }
    this.students.push(student);
  }
  delete(i:any){
    this.students.splice(i,1);
  }
  










}

 
 
    
    


  

  