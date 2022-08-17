let x = 100;
// console.log(x);

function test(){

 console.log(x); //Cannot access 'x' before initialization = block scope;

  let x = i = 10;     // x and i are declaring then assigning to their value;
//  x = i;                 // i is not defined because declaration part is missing;

 console.log(`x is ${x}`);   // 10
 console.log(`i is ${i}`);   // 10
}

test();

// Hoisting => means that if the variable declared Js takes an attendence of the same var and maintain in its variables register.
//             then from that register it will compare if the var consoled before or (above the declaration in code) the initialisation then the same var will be 
//             registered with a value of undefined.

// Shadowing => means that same variable name is declared inside a function then that variable 
// will be undefined until and unless the var defined inside that function.