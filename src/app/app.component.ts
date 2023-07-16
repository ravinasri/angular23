import { Component } from '@angular/core';
import { flowers } from './models/Flowers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flowers: flowers[] = [{ name: "Jasmine", rupees: 100, color: "white", isSmellGood: true }, { name: "Rose", rupees: 120, color: "Red", isSmellGood: true }, { name: "December Poo", rupees: 150, color: "Violet", isSmellGood: false }];
  name: string = "Angular";
  //toppings = new FormControl('');
  vehicles = ['Car', 'Bike'];
  addVehicles(vehicle) {
    this.vehicles.push(vehicle);
  }
}
