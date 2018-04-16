import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  templateUrl: './root-cause.component.html',
  styleUrls: ['./root-cause.component.sass']
})
export class RootCauseComponent {
  @ViewChild('addReasonModal') addReasonModal: ModalDirective;

  public addTopic; 
  reasonCategory = ['Materials','Method', 'Mother Nature', 'Machine', 'Man' ]
  
  reason = {
    type: 'Materials',
    description: ''
  }
  problem = {
    title: 'Untitled problem',
  }



  materials = [
    {description: 'Description', id: '1234'},
    {description: 'Description2', id: '1234'},
    {description: 'Description3', id: '1234'},
    {description: 'Description4', id: '1234'},
    {description: 'Description5', id: '1234'},
    {description: 'Description6', id: '1234'},
  ];
  method = [
    {description: 'Description', id: '1234'},
  ];
  motherNature = [
    {description: 'Description', id: '1234'},
    {description: 'Description2', id: '1234'},
  ];
  machine = [
    {description: 'Description', id: '1234'},
  ];
  man: [
    {description: 'Description', id: '1234'},
    {description: 'Description2', id: '1234'},
    {description: 'Description3', id: '1234'}
  ];
  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

  showAddReasonModal(value){
    this.reason.type = value;
    this.addReasonModal.show()
  }

  addReason(){
    console.log(this.reason.type);
    console.log(this.reason.description)
    this[this.reason.type].push({
      description: this.reason.description
    })
  }

  changeCategory() {
    

  }

  deleteReason(group, i) {
    //console.log(group, i)
    group.splice(i, 1)
  }
  
}
