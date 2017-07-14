import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to home Utkarsha";
  myValue = "Utkarsha_Kurekar";
  myBool = true;

  alertMe = function(e){
    this.onYell.emit(e);
  }

  @Input() ninja;

  @Output() onYell = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
