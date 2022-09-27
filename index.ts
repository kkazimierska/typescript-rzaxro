const myVar: string | number = 'hello world';

console.log(typeof myVar); // 👉️ "string"

if (typeof myVar === 'string') {
  console.log(myVar.toUpperCase()); // 👉️ "HELLO WORLD"
}

import { Employee } from './types'
var Jacek: Employee({id:2});

console.log(typeof Jacek.id)