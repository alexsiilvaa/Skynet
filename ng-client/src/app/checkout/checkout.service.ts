import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { IOrder, IOrderToCreate } from '../shared/models/Order';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getDeliveryMethods() {
        return this.http.get<IDeliveryMethod[]>(`${this.baseUrl}orders/deliveryMethods`).pipe(
            map((resp: IDeliveryMethod[]) => {
                return resp.sort((a, b) => b.price - a.price);
            })
        );
    }

    createOrder(order: IOrderToCreate) {
        return this.http.post<IOrder>(`${this.baseUrl}orders`, order);
    }
}
