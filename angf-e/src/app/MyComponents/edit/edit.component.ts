import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NetApiService } from 'src/app/net-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  item!:any;
  
  
  constructor(
    public postService: NetApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    
    this.getdata();
    
  }
   
  
  getdata(){
    this.id = this.route.snapshot.params['LobcatId'];
    this.postService.getbyid(this.id).subscribe(data=>{
      this.item=data;
    });
  }   

  submit(){
    console.log();
    this.postService.updateHome(this.item, this.id).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('Lobcat');
    })
  }
}
interface Post {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;
  isActive:boolean
}
