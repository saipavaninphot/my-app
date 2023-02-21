import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public name:string="";
  public price:number=0;
  public rating:number=0;
  public isFreedelivery:boolean=false;
  
  public term:string="";
  public products:any = [
    {name:'pen',price:10,rating:4,isFreedelivery:true},
    {name:'pencil',price:10,rating:3,isFreedelivery:true},
    {name:'shirt',price:810,rating:3,isFreedelivery:false},
    {name:'phone',price:15000,rating:4,isFreedelivery:true},
    {name:'laptop',price:19500,rating:5,isFreedelivery:true},
    {name:'jeans',price:1800,rating:4,isFreedelivery:false},
    {name:'trimmer',price:1110,rating:4.5,isFreedelivery:true},
    {name:'fan',price:1550,rating:4,isFreedelivery:true},
  ];


  pricelh(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
  }
    
  search(){
    this.products=this.products.filter((product:any)=> this.products.name.indexOf(this.term) !=-1);
  }

  pricehl(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
    
  }
  ratinglh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  ratinghl(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  Freedelivery(){
    this.products=this.products.filter((product:any)=> product.isFreedelivery==true)
  }

  applydiscount(){
    this.products=this.products.map((product:any) =>{
      product.price = product.price/2;
      return product;

    })
    
  }
  applydeliverycharges(){
    this.products=this.products.map((product:any)=>{
      if(product.isFreedelivery==false){
        product.price=product.price+20;
      }
      return product;
    })
  }

totalprice(){

  var total= this.products.reduce((sum:any,product:any)=> sum+product.price,0);
  alert ("total price is"+total);
}

totalcartitems(){
  alert("total cart items:"+this.products.length);


}
delete(i:any){
  this.products.splice(i,1);
}

add(){
  var product={
    name:this.name,
    price:this.price,
    rating:this.rating,
    isFreedelivery:this.isFreedelivery
  }
  this.products.push(product);
}

}