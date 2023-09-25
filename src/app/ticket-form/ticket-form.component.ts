import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  @Output() ticketSubmitted = new EventEmitter<any>();
  title = '';
  description = '';
  status = 'Open';
  id = 1;

  submitTicket() {
    if (!this.title || !this.description) return;
    const newTicket = {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      assignedDate: new Date()
    };
    this.ticketSubmitted.emit(newTicket);
    this.title = '';
    this.description = '';
    this.status = 'Open';
    this.id++;
  }
}
