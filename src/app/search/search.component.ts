import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {ConectionService } from '../conection.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword:'';
  public search_result :{};
  public showUsers: any;
  public showOrganizations: any;

  constructor(private conection : ConectionService) {
    this.showOrganizations = true;
    this.showUsers = false;
   }

  ngOnInit() {
  }
  usersButton(){
    this.showOrganizations = true;
    this.showUsers = false;
    this.Search();   
  }
  organizationsButton(){
    this.showOrganizations = false;
    this.showUsers = true; 
    this.Search();
    
  }

  Search(){

    if(!this.showOrganizations){
      this.conection.searchInOrganizations(this.keyword).subscribe(response =>{
        console.log (response);
        this.search_result = response;
      });

    }else{
      this.conection.searchInUsers(this.keyword).subscribe(response =>{
        console.log (response);
        this.search_result = response;
      });
    }
    
  }

  /*
  compensations: {intern: {…}, employee: {…}}
context: {signaled: null}
locationName: "Bogotá, Colombia"
name: "Andres Cortes"
openTo: (5) ["advising", "internships", "full-time-employment", "part-time-employment", "mentoring"]
picture: "https://starrgate.s3.amazonaws.com:443/users/d07f786eafe665eacf2f25f6649c871349807043/profile_fmHzcMq.jpg"
professionalHeadline: "Developer"
remoter: true
skills: Array(5)
0:
name: "Project Management"
weight: 0
__proto__: Object
1: {name: "Customer Service", weight: 0}
2: {name: "Python", weight: 0}
3: {name: "Creativity", weight: 0}
4: {name: "Leadership", weight: 0}
length: 5
__proto__: Array(0)
subjectId: "35719"
username: "andrescortes"
verified: true
weight: 0
  
  
  */

}
