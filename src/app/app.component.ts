import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tickets: any[] = [];

  addTicket(ticket: any) {
    this.tickets.push(ticket);
  }
}
