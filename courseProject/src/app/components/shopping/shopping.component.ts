import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {
  @Input('ingredients') ingredient: {name: string, amount: number}
  @Output() customEvent = new EventEmitter<{ name: string; amount: number; }>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.customEvent.emit({
        name: this.ingredient.name,
        amount: this.ingredient.amount
    })
}

}
