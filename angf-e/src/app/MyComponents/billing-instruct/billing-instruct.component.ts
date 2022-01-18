import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetApiService } from 'src/app/net-api.service';

@Component({
  selector: 'app-billing-instruct',
  templateUrl: './billing-instruct.component.html',
  styleUrls: ['./billing-instruct.component.css']
})
export class BillingInstructComponent implements OnInit {
  item!:any
  constructor(public service: NetApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.getdata();
    
  }
  getdata(){
    this.service.getclientbyid(1).subscribe(res=>{
      this.item=res;
    })
    
  }
  
}
