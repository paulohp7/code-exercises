import { Student } from './classes/Student';
import { Order } from './classes/Order';
import { Date } from './classes/Date';

const student1 = new Student(1234, 'John', [10, 10, 10, 10], [10, 10]);
console.log(`John avarage grade is: ${student1.avaregaGrades()}`);
const student2 = new Student(4321, 'Nick', [10, 5, 9, 8], [8, 7]);
console.log(`Nick avarage grade is: ${student2.avaregaGrades()}`);

const testDate = new Date(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate)

// formato inválido
console.log(invalidDate.format('a m d'));