"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
}
exports.Item = Item;
