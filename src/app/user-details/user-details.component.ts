import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../service/github.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute, private githubService: GithubService, private router: Router) { }

  username: string;
  userDetail: any;
  imgurl: string;
  name: string;
  bio: string;
  followers: string;
  company: string;
  location: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['id'];
      console.log('username', this.username);
    })

    this.githubService.getUser(this.username).subscribe({
      complete: () => { console.log('success!')},
      error: () => {
        alert('error ! search again');
        this.router.navigate(['searchuser']);
      },
      next : ( data : any = []) => {
        this.userDetail = data;
        console.log(this.userDetail);
        this.bio = this.userDetail.bio;
        this.company = this.userDetail.company;
        this.followers = this.userDetail.followers;
        this.imgurl = this.userDetail.avatar_url;
        this.location = this.userDetail.location;
        this.name = this.userDetail.name;
      }
    })
  }

  

}
