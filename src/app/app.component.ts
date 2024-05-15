import { Component } from '@angular/core';
import { Model, TodoItem } from './Model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  model1 = new Model();
  
  getName() {
    return this.model1.user;
  }

  getItems() {
    return this.model1.İtems.filter(item => !item.action); // filtreleme yap. Sadece false olanları listede bırak
  }
  addItem(value: string){
    if (value != ""){ // Eğer inputa değer girilip butona tıklandıysa TodoItem'a yeni nesne ekle
      this.model1.İtems.push(new TodoItem(value, false));
    }
  }


}

