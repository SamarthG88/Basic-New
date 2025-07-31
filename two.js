console.log(Math.abs(-8));

console.log(Math.round(5.2));

console.log(Math.ceil(4.1));

console.log(Math.floor(3.9));

console.log(Math.min(45,74,1,4));
console.log(Math.max(45,74,1,4));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));


let d=new Date();
console.log(d.toLocaleDateString());
console.log(d.toString());
console.log(d.toDateString());

let d2=new Date(2024,5,23,10,56,10);
console.log(d2.toLocaleString());

let t=Date.now()
console.log(t.toDateString());

console.log(t);
console.log(d2.getTime());


console.log(Math.floor(Date.now()/1000));

console.log(d2.getMonth());
console.log(d2.getDay());
console.log(d2.getDate());


d2.toLocaleString('default',{
    weekday:"long"
})