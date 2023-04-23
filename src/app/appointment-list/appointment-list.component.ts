import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
  providers: [CalendarService]
})
export class AppointmentListComponent {
  appointments : any[] = [];
  constructor(private calendarService: CalendarService){

  }

  ngOnInit() {
    this.appointments = this.calendarService.listAppointments();
  }
}


