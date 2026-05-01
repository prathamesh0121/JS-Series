console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 === 1);

console.log("**********************************");

console.log("2" == 2);
console.log("2" >= 1);

console.log("**********************************");

console.log(null > 0);    // JavaScript converts null → 0
console.log(null >= 0);   // JavaScript converts null → 0
console.log(null == 0);   //== works differently, == does NOT treat null as 0
console.log(null < true);  // null → 0 true → 1


console.log(undefined == 0); // undefined → NaN
console.log(undefined >= 0); // undefined → NaN
console.log(undefined > 0);  // undefined → NaN
console.log(undefined == null);  // undefined is only equal to null


