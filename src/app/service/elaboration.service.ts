import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElaborationService {

  constructor() { }

  fromStringToArrayOfNumbers(input: string){
    const stringArray = input.split(' ');
    return stringArray.filter((element) => !isNaN(parseFloat(element)));
  }

  // fromStringToArrayOfNumbers(input: string){  // FATTA IN CLASSE
  //   let array: number[] = [];
  //   const splittedString = input.split(' ');
  //   for (let i = 0; i < splittedString.length; i++) {
  //     const element = splittedString[i];
  //     const number = Number(element); // Oggetto che converte in numeri
  //     if(!isNaN(number)){
  //       array.push(number);
  //     }
  //   }
  //   return array;
  // }

  filterAnomalies(numbers: number[], top: number, bottom: number){
    const cloneNumbers = [...numbers];
    for (let i = 0; i < cloneNumbers.length; i++) {
      let number = cloneNumbers[i];
      if (number > top) {
        cloneNumbers[i] = top;
      } else if (number < bottom) {
        cloneNumbers[i] = bottom;
      } else {
        cloneNumbers[i] = number;
      }
    }
    return cloneNumbers;
  }

  keepEven(numbers: number[]): number[]{
    return numbers.filter(n => n % 2 === 0);
  }

}
