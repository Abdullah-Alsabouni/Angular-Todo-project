import { Component } from '@angular/core';
import { Model, TodoItem } from './Model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  model1 = new Model();
  isDisplay = false; // Default olarak işaretli olmasın
  
  getName() {
    return this.model1.user;
  }

  getItems() {
    if(this.isDisplay){ // eğer isDisplay = false ise Tüm itemleri getir
      return this.model1.İtems;
    }

    return this.model1.İtems.filter(item => !item.action); // filtreleme yap. Sadece false olanları listede bırak
  }
  addItem(value: string){
    if (value != ""){ // Eğer inputa değer girilip butona tıklandıysa TodoItem'a yeni nesne ekle
      this.model1.İtems.push(new TodoItem(value, false));
    }
  }


}

