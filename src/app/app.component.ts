import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
  name = 'hi';

  anime = {
    name : "Naruto",
    rank : "#3"
  };

  scream(e){
    alert("Death Note");

  }
}
