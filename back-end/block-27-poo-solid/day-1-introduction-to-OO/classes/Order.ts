import { Customer } from './Customer';
import { Item } from './Item'

export class Order {

    private _customer: Customer;
    private _items: Item[];
    private _paymentMethod: string;
    private _percentageDiscount: number;
    private _discount = false;

    constructor(customer: Customer, items: Item[], paymentMethod: string, percentageDiscount: number) {
        this._customer = customer;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._percentageDiscount = percentageDiscount;
    }

    discount() : void {
        this._discount = true;
    }
    
    sumOrder() : number {
        return this._items.reduce((partialSum, a) => partialSum + a.price, 0);
    }

    discountOrder() : number {
        if (this._discount) return this.sumOrder() * (1 - this._percentageDiscount);
        else return this.sumOrder();
    }
    
}