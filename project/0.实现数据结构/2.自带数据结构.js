//集合Set

let s = new Set([3,3,3]);
s.add(1).add(2);
console.log(s)
s.delete(3);
console.log(s);
console.log('--------')

//映射 Map

let m=new Map();
console.log(m.has('key'));
m.set("key","val");
console.log(m.get("key"))
m.delete('key')
console.log(m)


