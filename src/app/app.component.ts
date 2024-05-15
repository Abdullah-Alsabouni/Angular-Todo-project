import { Component } from '@angular/core';
import { Model } from './Model';


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
}
