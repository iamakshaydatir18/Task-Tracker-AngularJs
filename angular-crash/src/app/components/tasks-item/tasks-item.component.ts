import { Component,Input, Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {

  @Input() task:Task | undefined;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask : EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;

  onDelete(task: any): void{
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){

    this.onToggleTask.emit(task);
  }
}
