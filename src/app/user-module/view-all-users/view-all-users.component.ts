import { Component } from '@angular/core';
import { NewServiceService } from '../services/new-service.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css'],

})
export class ViewAllUsersComponent{


arr:any=[];
data:any;

  constructor(private formService:NewServiceService){
    
   console.log(this.formService.formData.name);
    console.log(this.formService.formData.email);
    console.log(this.formService.formData.phone);
    console.log(this.formService.formData.password);
    console.log(this.formService.image);
    console.log(this.formService.checkBoxData);

   this.data = this.formService.formData;
   this.data.prop = "image";
   this.data.image = this.formService.image;
   this.data.prop="checkBoxData";
   this.data.checkBoxData=this.formService.checkBoxData;
   console.log(this.data.checkBoxData+"  hiii ");
  
  }
  tbody= document.createElement('tbody');
  tr=document.createElement('tr');
  //  i:number=0;
   storeData(){
    for( let i=0;i<this.arr.length;i++){
    const td = document.createElement('td');
    td.innerHTML=this.arr[i];
    this.tr.appendChild(td);
   
    }
    this.tbody.append(this.tr);   
   }
}
