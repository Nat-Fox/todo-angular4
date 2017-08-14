import { Component } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // lista para guardar los todo
  todo = [];

  // string que representara el valor del input para agregar
  newTodo = '';

  constructor(
    private localStorage: LocalStorageService
  ) {}

  // función para agregar un elemento al todo (se ejecutara al presionar el btn)
  addNewTodo() {
    console.log('newTodo value antes', this.newTodo);
    // agregar una nueva todo al arreglo de tareas
    this.todo.push(this.newTodo);

    this.localStorage.store('valor', {
      name: this.newTodo
    });

    // limpiar input despues de agregar
    this.newTodo = '';
    console.log('todo value', this.todo);
    console.log('newTodo value despues', this.newTodo);
  }

  deleteFromTodo(element) {
    this.todo.indexOf(element);
    console.log(this.todo.indexOf(element));
    this.todo.splice(this.todo.indexOf(element), 1);
    // obtiene el valor del local storage
    let valor = this.localStorage.retrieve('valor');
    console.log('el valor es', valor);
    this.localStorage.clear('valor');
  }
}
