const myVar: string | number = 'hello world';

console.log(typeof myVar); // 👉️ "string"

if (typeof myVar === 'string') {
  console.log(myVar.toUpperCase()); // 👉️ "HELLO WORLD"
}

import { Employee } from './types'
