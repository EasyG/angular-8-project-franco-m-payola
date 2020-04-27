import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() user: User;

  @Input() indice : number;
  @Output() eliminar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrarUser(event)
  {
   
    this.eliminar.emit({indice : this.indice});
  }

}
