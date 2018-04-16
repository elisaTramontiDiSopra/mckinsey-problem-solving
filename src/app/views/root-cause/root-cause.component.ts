import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './root-cause.component.html',
  styleUrls: ['./root-cause.component.sass']
})
export class RootCauseComponent {
  problem = {
    title: 'Untitled problem',
  }
  material = [
    {description: 'Description', id: '1234'},
    {description: 'Description2', id: '1234'},
    {description: 'Description3', id: '1234'},
    {description: 'Description4', id: '1234'},
    {description: 'Description5', id: '1234'},
    {description: 'Description6', id: '1234'},
  ];
  method: [
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
    console.log(value);
  }

  deleteReason(group, i) {
    //console.log(group, i)
    group.splice(i, 1)
  }
  
}
