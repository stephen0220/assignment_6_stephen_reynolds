import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment = {
    date: '',
    time: '',
  };
}


// {
//   date : '04-22-2023',
//   time : '5:00'
// }