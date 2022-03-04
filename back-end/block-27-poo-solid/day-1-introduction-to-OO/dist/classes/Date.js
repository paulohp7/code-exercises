"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDate = void 0;
class myDate {
    constructor(day, month, year) {
        if (!this.validateDate(day, month, year)) {
            day = 1;
            month = 1;
            year = 1900;
        }
        this._day = day;
        this._month = month;
        this._year = year;
    }
    get day() {
        return this._day;
    }
    set day(value) {
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
    getMonthName() {
        const months = [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ];
        return months[this.month - 1];
    }
    isLeapYear() {
        return this._year % 4 === 0;
    }
    compare(date) {
        const currentDateStr = `${this.year}-${this.month}-${this.day}`;
        const dateStr = `${date.year}-${date.month}-${date.day}`;
        if (new Date(currentDateStr) > new Date(dateStr))
            return 1;
        if (new Date(currentDateStr) < new Date(dateStr))
            return -1;
        return 0;
    }
    format(formatting) {
        const conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g)) // verifica se tem o dia na formatação
        ];
        if (conditions.every(cond => cond)) {
            throw new Error(`Invalid format: ${formatting}`);
        }
        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();
        const dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substring(2));
        return dateFormatting;
    }
    validateDate(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
        if (new Date(dateStr).getDate() !== day)
            return false;
        return true;
    }
}
exports.myDate = myDate;
