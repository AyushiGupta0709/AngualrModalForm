import { Component, Input,Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {  NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NewServiceService } from '../services/new-service.service';


@Component({
  selector: 'app-preview-model',
  templateUrl: './preview-model.component.html',
  styleUrls: ['./preview-model.component.css']
})
export class PreviewModelComponent {
@Input() 
 name: any;
image:any;
checkBoxData:any=[];
// @ViewChild('modal') private previewModelComponent: TemplateRef<PreviewModelComponent> | undefined
//   modalRef: any;
 



constructor(public activeModal: NgbActiveModal, private formService: NewServiceService){

}
closeModal(){
  this.activeModal.dismiss('Cross-click');
    
}


}
