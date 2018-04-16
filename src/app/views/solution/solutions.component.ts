import { Component, ViewChild } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.sass']
})
export class SolutionsComponent {
  @ViewChild('addSolutionModal') addSolutionModal: ModalDirective;

  problem = {
    title: 'Untitled problem',
  }

  data = [
    //materials
    {
      reasons: [
        { description: 'Description reason 1',
          type: 'Materials',
          solutions: [
            {description: 'Description solution reason 1', title: 'Title solution reason 1', impact: 0, feasibility: 3},
            {description: 'Description solution reason 1', title: 'Title solution reason 1', impact: 0, feasibility: 3}
          ]
        },
        { description: 'Description reason 2',
          type: 'Materials',
          solutions: [
            {description: 'Description solution reason 1', title: 'Title solution reason 1', impact: 0, feasibility: 3},
          ]
        }
      ]
    },
    //method
    {
      reasons: [
        { description: 'Description reason 1',
          type: 'Method',
          solutions: [
            {description: 'Description solution reason 1', title: 'Title solution reason 1', impact: 0, feasibility: 3},
            {description: 'Description solution reason 1', title: 'Title solution reason 1', impact: 0, feasibility: 3}
          ]
        },
      ]
    }
  ]



  selectResponsables = ['Name1', 'Name2', 'Name3'];
  s = {
    title: '',
    description: '',
    date: '',
  };
  indexReason; indexType;
  public solutionType;

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
    
  }

  showAddSolutionModal(indexType, indexReason) {
    this.indexType = indexType; 
    this.indexReason = indexReason; 
    this.addSolutionModal.show();
  }

  addSolution() {
    this.data[this.indexType][this.indexReason].push({
      description: 'Description solution reason 1', 
      title: 'Title solution reason 1', 
      impact: 0, 
      feasibility: 3,
    });
  }
}
