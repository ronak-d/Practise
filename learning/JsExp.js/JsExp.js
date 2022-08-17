var x = 100;
// console.log(x);

function test(){

 console.log(x); //Cannot access 'x' before initialization = block scope;

//  let x = i = 10;     // x and i are declaring then assigning to their value;
 x = i;                 // i is not defined because declaration part is missing;

 console.log(`x is ${x}`);   // 10
 console.log(`i is ${i}`);   // 10
}

test();