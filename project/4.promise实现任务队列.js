function f1(callback){
    setTimeout(()=>{
        console.log("f1");
        callback()
    },200)
}
function f2(callback){
    setTimeout(()=>{
        console.log("f2");
        callback()
    },10)
}
function f3(callback){
    setTimeout(()=>{
        console.log("f3");
        callback();
    },50)
}

// 实现输出 f2,f1,f3

// Promise.all([new Promise((res,rej)=>(f1(res))),
//     new Promise((res,rej)=>(f2(res)))
// ])
// .then( ()=>new Promise( (resolve,reject )=> ( f3(resolve) ) ) )


//封装没那么简单，需要进一步深究
// quene([f1,f2,f3],2);
// function quene(list,count){
//     let n =list.length;
//     let i =0 ,k=0;
//     var p =new Promise((res,rej)=>res());
//     let arr=[];
//     for(let  i =0 ; i < n; i++){
//         arr[i] = new Promise((res)=>(list[i](res)));
//     }
//     console.log(arr);
//     Promise.all([arr[0],arr[1]]).then(()=>(arr[2]))

//     // while(i < n){

//     //     p = p.then(()=>{
//     //         let arr=[];
//     //         this.i = 
//     //         for(k =0 ;i + k < n &&  k < count; k++){
//     //             arr[k] = new Promise((res,rej)=>(list[i+k](res)));
//     //         }

//     //         console.log(arr);
//     //         return Promise.all(arr);
//     //     });
//     //     i +=  count;


//     // }
    
// }
