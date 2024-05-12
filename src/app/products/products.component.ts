import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
  HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  http = inject(HttpClient);
  productsForm = new FormGroup({
    name: new FormControl<string>(''),
    quantity : new FormControl<string>(''),
    description : new FormControl<string>(''),
  })

  onFormSubmit(){
    const addContactRequest = {
        name : this.productsForm.value.name,
        quantity : this.productsForm.value.quantity,
        description : this.productsForm.value.description,
    }
    this.http.post('https://localhost:7001/api/Products', addContactRequest )
    .subscribe({
      next: (value) => {
        console.log(value);
        this.productsForm.reset();
        window.location.replace("/app");
      }
    })
  }
}
