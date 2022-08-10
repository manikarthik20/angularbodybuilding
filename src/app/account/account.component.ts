import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit { 
sendData(data:NgForm)
 {
  
 }

  constructor() { }

  ngOnInit(): void {
  }

}
