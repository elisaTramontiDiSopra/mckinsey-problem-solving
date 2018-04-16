import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.sass']
})
export class SolutionsComponent {

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

}
