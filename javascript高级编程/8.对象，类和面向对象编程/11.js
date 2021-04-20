// function Parent(name){
//     this.name =name;
// }

// Parent.prototype.fun=function(){
//     //..
// }

// function Child(){
//     Parent.call(this);
//     //继承
    
    
// }


// var b = 10;
// (function b(){
//     b=20;
//     console.log(b)
// })()

// // console.log(b);
var data = [4,
[[0, 3, 3],
[5, 10, 5],
[10, -1, 6],
[3, 5, 4]],
7]
data=[
    1,
[[2, 4, 8]],
3
]
data=[
    2,
    [
    [1, 3, 5],
    [2, 4, 6]],
    4
]
data=[1,[2,2,1],3]


let n = data[0];
let arr=data[1];

let w = + data[2];

let res=0;
arr.sort((a,b)=>(a[0]-b[0]));
console.log(arr)
getRes();
function getRes(){
    var flag=false;
    if(arr[0][0] != 0) {flag=true;}
    if(w > arr[0][1]) res +=arr[0][1]*arr[0][2]; 
    for(let i = 1 ; i < arr.length;i++){
        if(arr[i][0] == arr[i-1][1]){
            if(w > arr[i][1] && arr[i][1]!=-1){
                res += (arr[i][1]-arr[i][0]) * arr[i][2];
            }
            else if(w > arr[i][0] && (arr[i][1]==-1 || w < arr[i][1] )){
                res += (w - arr[i][0]) * arr[i][2];
                
            }
        }
        else if(arr[i][0] > arr[i-1][1]) {//脱节
            flag=true;

        }
        else if(arr[i][0] < arr[i-1][1]){
            console.log(`[${arr[i-1][0]}, ${arr[i-1][1]}) has across with another interval`);
            return;
        }
        console.log(res)
    }
    if(flag){
        console.log(`some values are not covered by any interval`);
            return;
    }
    console.log(`shipping fee is ${res}`);
                return;
}
