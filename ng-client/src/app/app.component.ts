import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Skynet';
    products: IProduct[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const url = 'https://localhost:5001/api/products?pageSize=50';
        this.http.get(url).subscribe((resp: IPagination<IProduct>) => {
            this.products = resp.data;
            console.log(this.products);
        });
    }
}
