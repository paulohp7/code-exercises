export class myDate {
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(day: number, month: number, year: number) {

        if (!this.validateDate(day, month, year)) {
            day = 1;
            month = 1;
            year = 1900;
        }

        this._day = day;
        this._month = month;
        this._year = year;
    }


    get day(): number {
        return this._day
    }

    set day(value: number) {
        this._day = value;
    }

    get month(): number {
        return this._month
    }

    set month(value: number) {
        this._month = value;
    }

    get year(): number {
        return this._year
    }

    set year(value: number) {
        this._year = value;
    }

    getMonthName(): string {
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

    isLeapYear(): boolean {
        return this._year % 4 === 0;
    }

    compare(date: myDate): number {

        const currentDateStr = `${this.year}-${this.month}-${this.day}`;

        const dateStr = `${date.year}-${date.month}-${date.day}`;

        if (new Date(currentDateStr) > new Date(dateStr)) return 1;
        if (new Date(currentDateStr) < new Date(dateStr)) return -1;

        return 0;
    }

    format(formatting: string): string {

        const conditions: boolean[] = [
            (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
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

    private validateDate(day: number, month: number, year: number): boolean {
        const dateStr = `${year}-${month}-${day}`;

        if (new Date(dateStr).getDate() !== day)
            return false;
        return true
    }

}
