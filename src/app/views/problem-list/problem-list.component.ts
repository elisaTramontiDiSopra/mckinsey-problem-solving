import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.sass']
})
export class ProblemListComponent {
  user: any = {}
  isLoading: boolean;

  select = [
    {label: 'select1', link:''},
    {label: 'select2', link:''},
    {label: 'select3', link:''}
  ]
  problems = [
    {title: 'Untitled problem', description: 'Decscription 1', responsable: 'Jane Doe', creationDate: '12-12-2012', progress: 0.5},
    {title: 'Untitled problem', description: 'Decscription 1', responsable: 'Jane Doe', creationDate: '12-12-2012', progress: 1},
    {title: 'Untitled problem', description: 'Decscription 1', responsable: 'Jane Doe', creationDate: '12-12-2012', progress: 0.3}
  ]
  actions = {
    done: 4,
    total: 6
  }

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

  deleteProblem() {
    
  }
  
}
