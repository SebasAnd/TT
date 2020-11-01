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
}
