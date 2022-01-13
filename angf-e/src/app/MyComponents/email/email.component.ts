import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { NetApiService } from 'src/app/net-api.service';
const uploadAPI  = 'https://localhost:44375/api/Image/upload';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input() subl!:string
  @Input() body!:string
  @Input() foo!:string
  re!:any
  constructor(private imageService : NetApiService,private router: Router) { }
  title = 'email template';
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'imageFile' });
  ngOnInit() {
    this.imgupload();
    };
    imgupload(){
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         alert('Your file has been uploaded successfully');
    }
  }
  
  submit(){
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         this.re=response;
         alert('Your file has been uploaded successfully');
    }
    const data={
      Id:7,
      subject_line:this.subl,
      body:this.body,
      footer:this.foo,
      imageName:this.re
    }
    if(data.imageName==null){
      alert("please upload image")
    }
    else{
      this.imageService.emailput(7,data).subscribe(res=>{
      
        console.log("updated sussess");
        this.router.navigateByUrl('Lobcat');
      })
    }
    
  }
  }
