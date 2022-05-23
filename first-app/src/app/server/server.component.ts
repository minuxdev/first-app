import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
    
export class ServerComponent {
    keyword: string ;
    name: string;
    color: string;
    items: string[] = ['item1', 'item2', 'item3', 'item4'];

    eventHandler(event) {
        this.name = prompt("Hello, what's your name?");
    }

    hoverEvent(event) {
        console.log('Button was hovered');
    }

    getColor() {
        //return red if this.name == '' or green if not.
        // ternary operator
        return this.name == '' ? 'red' : 'green';
    }
}