import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.youtube.com/watch?v=4z95SAFud7w', 'https://www.youtube.com/watch?v=dbbque0Y4FU'];
  constructor() { }

  ngOnInit() {
  }

}
