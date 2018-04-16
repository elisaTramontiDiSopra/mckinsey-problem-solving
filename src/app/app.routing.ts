import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views\/home/home.component';
import { LoginComponent } from './views\/login/login.component';
import { ComponentsComponent } from './views\/components\/components.component';
import { ProblemListComponent } from './views\/problem-list/problem-list.component';
import { ProblemStatementComponent } from './views\/problem-statement/problem-statement.component';
import { RootCauseComponent } from './views\/root-cause/root-cause.component';
import { SolutionsComponent } from './views\/solution/solutions.component';
import { ActionsComponent } from './views\/actions/actions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'problem-list', component: ProblemListComponent },
  { path: 'problem-statement', component: ProblemStatementComponent },
  { path: 'root-cause', component: RootCauseComponent },
  { path: 'solution', component: SolutionsComponent },
  { path: 'actions', component: ActionsComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
