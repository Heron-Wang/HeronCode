console.time("time");
function coor(){
    this.x;
    this.y;
}


function fn(a,b,c){

    c.x = a.x + b.x;
    c.y = a.y + b.y;
    return c;
}

for(let i =0, co = new coor(),m = new coor();i<100000000;i++){
    co.x=i;
    co.y=i;
    fn(co,co,m);
}

console.timeEnd("time");

//?? 我这验证有些失败？居然还慢了