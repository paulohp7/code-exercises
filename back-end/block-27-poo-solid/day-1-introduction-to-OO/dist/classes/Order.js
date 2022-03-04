"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(customer, items, paymentMethod, percentageDiscount) {
        this._discount = false;
        this._customer = customer;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._percentageDiscount = percentageDiscount;
    }
    discount() {
        this._discount = true;
    }
    sumOrder() {
        return this._items.reduce((partialSum, a) => partialSum + a.price, 0);
    }
    discountOrder() {
        if (this._discount)
            return this.sumOrder() * (1 - this._percentageDiscount);
        else
            return this.sumOrder();
    }
}
exports.Order = Order;
