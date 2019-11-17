import '../css/style.css';
import '../css/style.scss';
import {
  moduleOne
} from './moduleOne';

const helloArr = require('./moduleOne.js');


console.log('API Key from Define Plugin:', API_KEY);

class TestClass {
  constructor() {
    const msg = "Using ES2015+ syntax";
    console.log(msg);
  }
}

let test = new TestClass();


// Пример массива
console.log(helloArr);


// Пример работы с глобальными переменными
if (APP_ENV === 'dev') {
  //код только при отладке
  console.log("development hello!");
}


/* пример подключения модуля*/
let mod = moduleOne(2, 3);

console.log(mod);