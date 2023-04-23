import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  appointments = [
    {
      id: 1,
      date : '04-22-2023',
      time : '6:00'
    },
    {
      id: 2,
      date : '05-22-2023',
      time : '7:00'
    },
    {
      id: 3,
      date : '06-22-2023',
      time : '8:00'
    }
  ]

  constructor() { }

  listAppointments() {
    return this.appointments;
  }

  getAppointment(id: Number){
    return this.appointments.find((appointment) => appointment.id === id);
  }
}
