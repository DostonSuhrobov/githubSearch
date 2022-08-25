import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  searchform: FormGroup;

  ngOnInit(): void {
    this.searchform = new FormGroup({
      username: new FormControl(
        null, 
        [Validators.required]
      )
    })
  }

  sendUser(){
    console.log(this.searchform.value);
  }

}
