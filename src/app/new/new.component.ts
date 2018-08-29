import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() carouselTitle: string; 
  @Input() sortedBy: string 

  products: Product[] = []; 

  constructor(
    private productService : ProductService 
  ) { }

  ngOnInit() {
    
    //GET PRODUCTS 
    this.productService.getProducts(this.sortedBy)
      .subscribe(
        data => this.products.push(data) 
      )
      
      console.log(this.products);
  }
  

}
