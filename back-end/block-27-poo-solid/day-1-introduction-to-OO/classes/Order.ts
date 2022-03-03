import { Customer } from './Customer';
import { Item } from './Item'

export class Order {

    private _customer: Customer;
    private _items: Item[];
    private _paymentMethod: string;
    private _percentageDiscount = 0;
    private _discount = false;

    constructor(customer: Customer, items: Item[], paymentMethod: string) {
        this._customer = customer;
        this._items = items;
        this._paymentMethod = paymentMethod;
    }
    
    // public get name() : string {
    //     return this._name
    // }

    // public set name(name: string) {
    //     this._name = name;
    // }
    
}