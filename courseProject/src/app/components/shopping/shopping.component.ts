import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Manges', 25),
    new Ingredient('Orange', 35),
    new Ingredient('Banana', 226)
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
