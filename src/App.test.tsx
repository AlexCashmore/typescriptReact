import React from 'react';

/*Some basic tests on the business logic. Usually would use Jest.*/
import {isPrime,calculatePrimes} from './entities'

test('isPrime returns true for a prime number', () => {
  const testPrime = isPrime(3);
  expect(testPrime).toBeTruthy()
});
test('isPrime returns false for a non prime number',()=>{
  const testIsNotPrime = isPrime(15);
  expect(testIsNotPrime).toBeFalsy()
});
test('calculatePrimes returns primes between 5 and 30',()=>{
  const testArrayContainsPrimes=calculatePrimes(5,30);
  expect(testArrayContainsPrimes).toEqual([
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29]);
});
test('calculatePrimes returns no prime numbers between -30 and -5',()=>{
  const testArrayDoesNotContainPrimes=calculatePrimes(-30,-5);
  expect(testArrayDoesNotContainPrimes).toEqual([])
});
test('calculatePrimes returns one prime number between 1 and 2',()=>{
  const testArrayDoesNotContainPrimes=calculatePrimes(1,2);
  expect(testArrayDoesNotContainPrimes).toEqual([2])
});
