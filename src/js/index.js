import '../css/style.css';
import '../css/style.scss';
import {
  moduleOne
} from './moduleOne';

const helloArr = require('./moduleOne.js');



class TestClass {
  constructor() {
    const msg = "Using ES2015+ syntax";
    console.log(msg);
  }
}

const test = new TestClass();


// Пример массива
console.log(helloArr);

/* пример подключения модуля*/
let mod = moduleOne(2, 3);

console.log(mod);