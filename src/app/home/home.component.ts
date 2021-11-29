import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Utilisateur!: FormGroup;
  user:string[]=[];


  constructor(public lm:FormBuilder,public User:HotelsService,private router:Router) { }
  onSubmit(){
    if((this.Utilisateur.value['username']==this.user[0])&&(this.Utilisateur.value['password']==this.user[1]))
    {this.router.navigateByUrl('/login');}
  }

  ngOnInit(): void {
    this.Utilisateur=this.lm.group({
      username:[''],
      password:['']
    });
    this.user=this.User.getuser();
  }

}
