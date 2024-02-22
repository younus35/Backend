const person ={
    name:'younus',
    age:18,
    greet(){
        console.log('Hello World')
    }
};

const printName = (personData) =>{  //({name,age})
       console.log(personData.name);
}

printName(person);
//destructors
const {name, age} = person;
console.log(name,age);

const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const [fruit1,fruit2,fruit3] = fruits;
console.log(fruit2,fruit1);