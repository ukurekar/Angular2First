import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'My first app';

  yell(e){
    alert('I am yelling');
  }
  ninja = {
    name: "Hatim",
    belt: "Red"
  };
}
