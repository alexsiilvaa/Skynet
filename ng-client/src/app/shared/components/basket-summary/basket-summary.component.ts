import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';

@Component({
    selector: 'app-basket-summary',
    templateUrl: './basket-summary.component.html',
    styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
    basket$: Observable<IBasket>;
    @Input() isBasket = true;
    @Output() increment = new EventEmitter<IBasketItem>();
    @Output() decrement = new EventEmitter<IBasketItem>();
    @Output() remove = new EventEmitter<IBasketItem>();

    constructor(private basketService: BasketService) { }

    ngOnInit() {
        this.basket$ = this.basketService.basket$;
    }

    removeBasketItem(item: IBasketItem) {
        this.remove.emit(item);
    }

    incrementBasketItem(item: IBasketItem) {
        this.increment.emit(item);
    }

    decrementBasketItem(item: IBasketItem) {
        this.decrement.emit(item);
    }

}
