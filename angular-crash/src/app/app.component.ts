import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/button/button.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { AddTaskComponent } from './components/add-task/add-task.component';


const appRoutes:Routes =[
    { path : '', component  : TasksComponent}
]
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, ButtonComponent, TasksComponent, 
        AddTaskComponent]
})
export class AppComponent {
  
}
