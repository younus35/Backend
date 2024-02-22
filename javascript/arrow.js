let product = (a,b) => a*b;

console.log(product(2,5));
//student obj
const student = {
     name:"younus",
     age:22,
     rollno:123,
     main:"math",
    //  subject: () =>{
    //     console.log("hi i am good with"+this.name);
    //  } this will give us undefined when we run line 16 so we can remove arrow add use old way function() like this
    //or we can also use it like this 
    subject(){
        console.log("hi i am good with "+this.main);
    }
};
console.log(student);
student.subject();