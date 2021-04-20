// let person={};
// Object.defineProperty(person,"name",{
//     writable:false,
//     value:"nina"
// })

// //---
// let book={
//     year_:2007,
//     edition:2
// }

// Object.defineProperty(book,"year",{
//     get(){
//         return this.year_;
//     },
//     set(newValue){
//         this.year_=newValue;
//     }
// })

// console.log();
// for(let i = 0 ; i < .length; i++){
    
// }

/* function Person(name){
    this.name =name;
    if(name == 'wang'){
        return 'heron';  //不是对象，所以发挥原来的this
    }else {
        return [1,2];   //是对象，直接返回
    }
}
let a = new Person('wang');
let b = new Person('xixi');
console.log(a);
console.log(b); 

*/
let arr = new Array(1,2);
let vals = Object.values(arr);
console.log(vals);


