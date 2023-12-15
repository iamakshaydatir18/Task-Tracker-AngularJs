import { Component , Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TasksItemComponent } from "../tasks-item/tasks-item.component";
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TasksItemComponent, AddTaskComponent, FormsModule]
})
export class TasksComponent {
  tasks : Task[] = [];

  constructor(private taskService : TaskService ){}

  ngOnInit() :void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task : Task){

    console.log(" calling delete ");
      this.taskService.getDelete(task).subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        );
  }

  onToggle(task : Task){
      task.reminder = !task.reminder;
     // console.log(task.reminder);

     this.taskService.updateReminder(task).subscribe();
  }

  addTask(task: Task) {
    
    console.log(task);
    this.taskService.onSave(task).subscribe((task) => this.tasks.push(task));
  }

}
