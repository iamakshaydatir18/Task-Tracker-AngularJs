import { Component ,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text='';
  day='';
  reminder= false;
  onTaskAdd :boolean = false;

  @Output() onSaveTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService){

    this.uiService.onToggle().subscribe( value => this.onTaskAdd = value);
  }

  onSubmit(){

    if(!this.text){
      alert("Please enter task!!!!");
      return;
    }


    const newTask : Task = {
      text :this.text,
      day :this.day,
      reminder : this.reminder,
    };

   // console.log(newTask);
    this.onSaveTask.emit(newTask);

    this.text ='';
    this.day ='';
    this.reminder =false;
  }

}
