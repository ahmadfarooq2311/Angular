import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from './modal/product.modal';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink ,
    ProductsComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);
  //public data:any[] = [];

  
  products$ = this.getProducts();
  title = 'Assesment';
  // constructor(private http:HttpClient){}
  // ngOnInit(): void {
  //   this.getProducts();
  // }
  private getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:7001/api/Products')
  }
  onDelete(id: string){
    return this.http.delete(`https://localhost:7001/api/Products/${id}`)
    .subscribe({
      next : (value) => {
        alert("Data Susscefully Deleted with Id");
        window.location.reload();
      }
    })
  }
}
