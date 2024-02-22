const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
for(let fruit of fruits){
    console.log(fruit);
}
const newfruits = fruits.map(fruit => {
     return fruit === ' ' ? 'empty string' : fruit;
})
console.log(newfruits);
//object and arrays are reference type so when we change we are not chaning the address
//(the const declared arrays the address of the array is stored)
const copiedFruits = [...fruits];
console.log(copiedFruits);
//In both cases, the spread operator creates a new object or array with a new reference in memory.
// So, it does not point to the same old object or array.
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object 
//into another array or object.
const toArray = (...args) =>{
    return args;
}
console.log(toArray(1,2,3));
console.log(toArray(1,2,3,4));
//The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array,
//thus allowing us to write functions that can accept a variable number of arguments,
//irrespective of the number of parameters defined. 
