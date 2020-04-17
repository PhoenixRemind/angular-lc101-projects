import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Maximum enjoyment located here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr07/8/11/original-28778-1399564141-24.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*';
  image3 = 'https://i.pinimg.com/originals/32/c7/bf/32c7bf011a62e3caa04ed2cd28ba5e1c.jpg';

  constructor() { }

  ngOnInit() {
  }

}