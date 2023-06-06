import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NewServiceService} from '../services/new-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  loginForm= new FormGroup({
    name:new FormControl('Ayushi',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    email:new FormControl('ayushi@gmail.com',[Validators.required,Validators.email]),
    phone:new FormControl('8743874378',[Validators.required,Validators.maxLength(10)]),
    password : new FormControl('123',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    technology: new FormControl('java'),
    // image:new FormControl('')
  
    // category: new FormControl('general'),
  
  
  }

  );
  url:any;
  chooseFile(event:any){
  //   if(event.target.files){
  //     var reader=new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //       console.log(this.url);
  //     }
  //   }



  // }


  if(!event.target.files[0] || event.target.files[0].length == 0) {
    // this.msg = 'You must select an image';
    return;
  }
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    // this.msg = "Only images are supported";
    return;
  }
  
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    // this.msg = "";
    this.url = reader.result; 
    this.formService.image=this.url;
  }
}
checkBoxData:any=[];
checkBox1(event:any){
  if(event.target.checked===true){
    console.log(event.target.value);
    this.checkBoxData.push(event.target.value);

  }

}
checkBox2(event:any){
  if(event.target.checked==true){
    this.checkBoxData.push(event.target.value);

  }

}
checkBox3(event:any){
  if(event.target.checked==true){
    this.checkBoxData.push(event.target.value);

  }


}
checkBox4(event:any){
  if(event.target.checked==true){
    this.checkBoxData.push(event.target.value);

  }


}
checkBox5(event:any){
  if(event.target.checked==true){
    this.checkBoxData.push(event.target.value);

  }


}










  // NewServiceService: any;
  loginUser(){
    this.formService.formData=this.loginForm.value;
    this.formService.checkBoxData=this.checkBoxData;
    console.log(this.loginForm.value);
  }
  get name(){
    return this.loginForm.get('name');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
  get password(){
    return this.loginForm.get('password')
  }
  
  // get image(){
  //   return this.loginForm.get('image');
  // }






  closeResult: string | undefined;
  
  constructor(private modalService: NgbModal,private formService:NewServiceService) {
   
   
  }

    
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
