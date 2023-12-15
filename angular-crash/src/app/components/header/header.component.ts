import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, ButtonComponent]
})
export class HeaderComponent {
  title: String = 'Task Tracker';
  showAddTask:boolean = false;
  subscription :Subscription | undefined;


  constructor(private uiService :UiService){

    this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ToogleAddTask(){

   this.uiService.toggleAddTask();

  }
}
