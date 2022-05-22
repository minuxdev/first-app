import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
    
export class ServerComponent {
    keyword: string ;
    name: string;

    eventHandler(event) {
        // when the button is clicked the ret variable 
        // will be updated
        return this.name = prompt("Hello, what's your name?");
    }

    hoverEvent(event) {
        console.log('Button was hovered');
    }
}