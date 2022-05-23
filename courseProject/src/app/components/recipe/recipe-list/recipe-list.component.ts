import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../recipe.module"; // importing Recipe module

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
      // using Recipi module
      recipes: Recipe[] = [
        new Recipe(
            "test recipe", "is a test of Recipe module",
            "https://mznews.co.mz/wp-content/uploads/2021/07/Google.jpg"
        ),
        new Recipe(
          "test recipe", "is a test of Recipe module",
          "https://mznews.co.mz/wp-content/uploads/2021/07/Google.jpg"
      )
    ];

    @Input('recipeList') element: {name:string, title: string}

  ngOnInit(): void {
  }

}
