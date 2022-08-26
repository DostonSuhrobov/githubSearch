import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private route: Router) { }

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
    const username = this.searchform.value.username;
    this.route.navigate([`/user/${username}`])
  }

}
