import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './problem-statement.component.html',
  styleUrls: ['./problem-statement.component.sass']
})
export class ProblemStatementComponent {

  select = [
    {label: 'select1', link:''},
    {label: 'select2', link:''},
    {label: 'select3', link:''}
  ]
  selectMachine = [
    {label: 'machine1', link:''},
    {label: 'machine2', link:''},
    {label: 'machine3', link:''}
  ]
  problem = {
    title: 'Untitled problem',
    owner: '',
    statement: '',
    where: 'test where',
    when: 'test when',
    state: 'test future state',
    measure: 'test measure',
    machine: '',
    tags: 'Enter a new tag'
  }

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

}
