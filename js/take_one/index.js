// what is "Scope"
// var: Function Scope, Global Scope
// let: Block Scope, Global Scope

// NG: var is Function Scope
function main() {
    var x = 'hi';
}
console.log(x); 

// OK:var is Function Scope
function main1() {
    var x = 'hi';
    console.log(x); 
}

// OK:Function Scope > Block Scope
function main2() {
    if (true) {
        var x = 'hi';
        console.log(x);     
    }
    
}

// OK:Function Scope > Block Scope
function main3() {
    if (true) {
        var x = 'hi';
    }
    console.log(x);    
}

// NG:let is Function Scope
function main4() {
    if (true) {
       let x = 'hi';
    }
    console.log(x);    
}

// OK:let is Function Scope
function main5() {
    if (true) {
        let x = 'hi';
        console.log(x);    
    }
}

// quiz:Scope, [hello]
function main6() {
    let x = 'hello';
    if (true) {
        let x = 'hi';
    }
    console.log(x); //?
}

// quiz:Scope, [hi]
function main7() {
    var x = 'hello';
    if (true) {
        var x = 'hi';
    }
    console.log(x); //?
}

// quiz:Scope, [0,1, NG]
function main8() {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
    console.log(i); //?
}

// quiz:Scope, [0,1,2]
function main9() {
    for (var i = 0; i < 2; i++) {
        console.log(i);
    }
    console.log(i); //?
}

// let is not include Object.window
var aVar = 'varHello';
let aLet = 'letHello';

console.log(window)

// OK:overwrite check
var x = 'hello';
//......
var x = 'hi';
console.log(x);

// NG:overwrite check
let x = 'hello';
//......
let x = 'hi';
console.log(x);

// hoisting
// NG:no num
console.log(num);

// OK:hoisting - undefined
console.log(num);
var num = 10;

// OK:hoisting - undefined, 10
console.log(num);
var num = 10;
console.log(num);

// NG:hoisting -> not init => Temporal Dead Zone
console.log(num);
let num = 10;
console.log(num);

// const : block scope, no overwrite, no hoisting

// NG:no overwrite
const a = 'hi';
a = 'hello';

// OK:overwrite
let b;
b = '123';

// Object check
const c = {
    x: 1,
    y: 2
};
// NG
c = { a: 3 }
// OK
c.x = 3;
console.log(c);

// Immutability. fixed object
const d = Object.freeze({
    x: 1,
    y: 2
});

d.x = 3;
console.log(document)

// arrow function
function test(arg1, arg2, ...argN) {
  return expression;
};

let test = function test(arg1, arg2, ...argN) {
  return expression;
};

let test = (arg1, arg2, ...argN) => expression

// quiz: arrow function test
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "print?",
  function() { alert("print"); },
  function() { alert("cancel"); }
);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "print?",
  () => alert("print"),
  () => alert("cancel")
);

// spread function
// const is not edit
const a = [1, 2, 3];
const b = [...a];
console.log(a);
console.log(b);

// spread function:merge
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(a);
console.log(b);
console.log(c);

// spread function:object
const a = { a: 1,b: 2 };
const b = { ...a };
console.log(a);
console.log(b);

// spread function:object edit
const a = { a: 1,b: 2 };
const b = { ...a, b:4 };
console.log(a);
console.log(b);

// spread function:object edit(deep)
const a = {
    a: {
        b: {
            c: 1,
            d: "test"
        }
    },
    e: 2 };
const b = {
    ...a,
    a: {
        ...a.a,
        b: {
            ...a.b,
            c: 999
        }
    },
};
console.log(a);
console.log(b);

import {sayHi, sayBye} from './test.js';
sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// promise, async/await
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });


  (async () => {
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  })();

  //?????? ?????????
//Promise ??? ????????? ????????? .catch() ?????? ?????? ?????? ???????????? ???????????????, async/await ??? ?????? ????????? ??? ??? ?????? ????????? ?????? try-catch() ?????? ???????????? ??????
//?????? ?????????
//Promise??? .then() ????????? ?????????
//????????? ???????????? ???????????????, async/await ??? ????????? ????????? ???????????? ??????.
//async/await ??? ????????? ????????? ?????? ???????????? ????????? ?????????. ?????? ????????? ?????? ?????? ??????.

//https://mong-blog.tistory.com/entry/promise%EC%99%80-async-await%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90

