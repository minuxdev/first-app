import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

// OnInit is an interface [will be explained later]
export class RecipeComponent implements OnInit {
    list_recipe = [{name: "Recipe 1", type:"Recipe"},
    {name: "Recipe 1", type:"Recipe"}]

    constructor() { }


    ngOnInit(): void {
        
    }
}