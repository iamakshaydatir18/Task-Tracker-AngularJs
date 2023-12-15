import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    RouterModule.forRoot([
        { 
         path: '', 
         component: TasksComponent
       }
])
];
