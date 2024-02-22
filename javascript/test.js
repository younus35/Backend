console.log('a');

console.log('b');

const promise = new Promise((resolve,reject)=>{
    setTimeout(() => { 
        resolve();
    },1000);
})

promise
.then(()=>{
    console.log('c');
    return promise;
})
.then(()=>{
    console.log('d');
    console.log('e');
})
// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

