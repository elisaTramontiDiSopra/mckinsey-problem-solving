import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.sass']
})
export class ActionsComponent {

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

  
}
