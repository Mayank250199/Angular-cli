import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


@Input() anime;
@Output() onscream = new EventEmitter();

firescreamEvent(e){
  this.onscream.emit(e);
}

  constructor() { }

  ngOnInit() {
  }

}
