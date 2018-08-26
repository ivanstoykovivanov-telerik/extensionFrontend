import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Product } from '../models/product.model';
import { Tag } from '../models/tag.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   
  product: Product = new Product("Slack chat", 
      "Next generation chat for the modern office communication", 
      "12.34", 
      new User("prodan123"),
      1234, 
      "http://www.slack-bot.com/download",
      "http://github/slac-chat", 
      12,
      [new Tag("chat"), new Tag("chatbot"), new Tag("machine learning") ], 
      421, 
      new Date(), 
      "pending", 
      123
  ); 

  constructor( 
    private router: Router, 
    private productService: ProductService 
  ) { }

  ngOnInit() {
  }

  productClicked(product : Product){
    console.log("Product clicked:  ");
    this.data = product; 
    console.log(this.data);
    this.router.navigate(['/productDetails']);
  }


  get data(): Product { 
    return this.productService.productDetails; 
  } 
  set data(value: Product) { 
    this.productService.productDetails = value; 
  } 

}
