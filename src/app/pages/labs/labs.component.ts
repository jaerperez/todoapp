import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome='Bienvenido a mi primera aplicación con angular 17'
  task=[
    'tarea uno',
    'tarea dos',
    'tarea tres'
    ]

}
