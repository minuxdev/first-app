import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

// OnInit is an interface [will be explained later]
export class RecipeComponent implements OnInit {
    @Output() customEvent = new EventEmitter<{dataName: string}>();
    // (sendEvent)="receiveItemData($event)"
    list_recipe = [
        {name: "Recipe 1", type:"Recipe"}
    ]

    constructor() { }

    ngOnInit(): void {
        
    }


}