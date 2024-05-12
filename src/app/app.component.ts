import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from './modal/product.modal';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
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
    ReactiveFormsModule,
    MatTableModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);
  router = inject(Router);
  //public data:any[] = [];
  //displayedColumns: string[] = ['id', 'name', 'description', 'quantity'];
  products$ = this.getProducts();
  title = 'Assesment';
  // constructor(private http:HttpClient){}
  // ngOnInit(): void {
  //   this.getProducts();
  // }
  getProducts() : Observable<Product[]> {
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
  onEdit(id: string){
    console.log(id)
    this.router.navigateByUrl("/Product/"+id)
  }
}
