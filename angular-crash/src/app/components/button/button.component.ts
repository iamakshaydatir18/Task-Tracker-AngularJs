import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() color : string | undefined;
  @Input() text : string | undefined;
  @Output() btnClick = new EventEmitter();

  constructor(){}

  OnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnClick(){
    this.btnClick.emit();
  }

}
