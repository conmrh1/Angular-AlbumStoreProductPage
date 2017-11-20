import { Component, OnInit } from '@angular/core';
import {Track} from '../Track';
import {ProductService} from '../product.service';
import { Album } from 'app/album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    return this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
    
  }

}
