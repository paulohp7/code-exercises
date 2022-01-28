function myNumbers(numbers) {
    const promise = new Promise((resolve, reject) => {
        if (numbers.some((number) => typeof number !== 'number')) reject(new Error('Informe apenas números'))
        const myOperation = (numbers[0] + numbers[1]) * numbers[2];
        if (myOperation < 50) reject(new Error('Valor muito baixo')) 
        resolve(myOperation)
    });
    return promise;
  }

  module.exports = myNumbers;
  