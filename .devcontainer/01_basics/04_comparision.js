// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that an equality check == and comparisons > >>=<= work diffrently
//comparisons convert null to a Number. treating its as 0.
//thats why (3) null >= 0 is true and (1) null > 0 is false.

// console.log(undefined == 0)

// ===

console.log("2" === 2)