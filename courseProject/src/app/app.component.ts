import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingredientList = [
    new Ingredient('banana', 23),
    new Ingredient('banana', 23),
    new Ingredient('banana', 23)
  ]

  receiveItemData(data: {name: string, amount: number}) {
    console.log(data.name);
  }
}
