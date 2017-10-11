import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from  '@angular/router';
import { DataService } from '../data.service';
declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService]
  })
export class DirectoryComponent implements OnInit {
animes = [];
bool = null;

  constructor(private dataService: DataService ) {}

/*
   anime: string;

   constructor(private route: ActivatedRoute ) {
     this.anime = route.snapshot.params['anime'];
   }*/

  ngOnInit() {
  /*  this.dataService.fetchData().subscribe(
      (data) => this.animes = data
    );*/

    this.fbGetData();
  }



fbGetData(){
   firebase.database().ref('/').on('child_added',(snapshot) => {
     this.animes.push(snapshot.val())
     })

}

fbPostData(name,rank){
   firebase.database().ref('/').push({name:name,rank: rank});

}
}
