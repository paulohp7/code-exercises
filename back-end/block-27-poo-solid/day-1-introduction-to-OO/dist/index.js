"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./classes/Student");
const Order_1 = require("./classes/Order");
const Customer_1 = require("./classes/Customer");
const Item_1 = require("./classes/Item");
const Date_1 = require("./classes/Date");
const student1 = new Student_1.Student('1234', 'John');
student1.tests = [10, 10, 10, 10];
student1.projects = [10, 10];
console.log(`${student1.name} enrollment is: ${student1.enrollment}`);
console.log(`${student1.name} tests grades are: ${student1.tests}`);
console.log(`${student1.name} avarage grade is: ${student1.averageGrades()}`);
const student2 = new Student_1.Student('4321', 'Nick');
student2.tests = [8, 10, 5, 7];
student2.projects = [5, 10];
console.log(`${student2.name} enrollment is: ${student2.enrollment}`);
console.log(`${student2.name} tests grades are: ${student2.tests}`);
console.log(`${student2.name} avarage grade is: ${student2.averageGrades()}`);
const customer1 = new Customer_1.Customer('João');
const sandwiche = new Item_1.Item('Sandwich', 5.00);
const juice = new Item_1.Item('Pinapple juice', 5.00);
const dessert = new Item_1.Item('Grape jelly', 2.50);
const order = new Order_1.Order(customer1, [sandwiche, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Normal price: ', order.sumOrder());
order.discount();
console.log('Price with discount: ', order.discountOrder());
const testDate = new Date_1.myDate(29, 1, 1989);
console.log(testDate);
console.log('Day: ', testDate.day);
console.log('Month: ', testDate.month);
console.log('Month in writting: ', testDate.getMonthName());
console.log('Year: ', testDate.year);
console.log('Is this year a Leap Year', testDate.isLeapYear() ? 'Yes' : 'No');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));
const otherDate = new Date_1.myDate(30, 1, 2021);
const compared = testDate.compare(otherDate);
const compareStates = ['before', 'equal', 'after'];
console.log(`The fist date is ${compareStates[compared + 1]} the second.`);
// invalid date
const invalidDate = new Date_1.myDate(31, 2, 2021);
console.log('Invalid test date: ', invalidDate);
// invalid format
try {
    console.log(invalidDate.format('a m d'));
}
catch (e) {
    console.log(e.message);
}
