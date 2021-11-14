console.log("** multiplication tables - table of 9**");
const number = 9;
for (var i = 1; i <= 10; i++) {
    console.log(i + "*" + number + "=" + i*number);
}
//expected output:
// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...

console.log("** multiplication tables - BONUS**");
for (var x = 1; x <= 10; x++) {
     for (var y = 1; y <= 10; y++) {
     console.log(x + "*" + y + "=" + x*y);
    }
}

// 1 x 1 = 1 
// 1 x 2 = 2 
// 1 x 3 = 3 
// etc…
// …
// 9 x 1 = 9 
// 9 x 2 = 18 
// 9 x 3 = 27
 // ...