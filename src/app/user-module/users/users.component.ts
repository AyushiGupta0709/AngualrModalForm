import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {NgbModal,NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NewServiceService} from '../services/new-service.service';
import { PreviewModelComponent } from '../preview-model/preview-model.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  loginForm= new FormGroup({
    name:new FormControl('Ayushi',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    email:new FormControl('ayuishi@gmail.com',[Validators.required,Validators.email]),
    phone:new FormControl('9876543210',[Validators.required,Validators.maxLength(10)]),
    password : new FormControl('12345',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    technology: new FormControl(''),
  
  }

  );
  url:any;
  modalRef: any;
  modelRef: any;
  chooseFile(event:any){
  if(!event.target.files[0] || event.target.files[0].length == 0) {
    return;
  }
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    return;
  }
  
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
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

  closeResult: string | undefined;
  
  constructor(private modalService: NgbModal,private formService:NewServiceService) {
   
   
  }

    
  open() {
    if(!this.loginForm.valid) {
      return;
    }

    this.formService.formData = this.loginForm.value;

    const modelRef = this.modalService.open(PreviewModelComponent);
    modelRef.componentInstance.name =  this.loginForm.value;
    modelRef.componentInstance.image = this.formService.image;
    modelRef.componentInstance.checkBoxData=this.checkBoxData;


  }
  // close() {
  //   this.modelRef.close()
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }


}
