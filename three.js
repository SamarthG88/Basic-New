let ar=[1,2,3,4,5,6];

console.log(ar[3]);

console.log(ar);


ar.push(20);
ar.pop();

ar.unshift(40);
ar.shift();

console.log(ar);

let newAr=ar.join();
console.log(newAr);


console.log(ar);

let arrr=ar.slice(1,4);
console.log(arrr);


let newARR=ar.splice(1,4);
console.log(newARR);

console.log(ar);

let a1=[1,2,3,4,5];
let a2=[5,6,7,8,9];

a1.push(a2);
console.log(a1);


let newone=a1.concat(a2);
console.log(newone);


let d1=[1,2,3,[4,5,6],[7,8,[9,10]]];
console.log(d1);


let all=d1.flat(Infinity);
console.log(all);


let h1=["k1","k2","k3"];
let h2=["G1","G2","G3"];

let allHero=[...h1 , ...h2];
console.log(allHero);


console.log(Array.isArray(a1));

console.log(Array.from("HelloBuddy"));


let b1=10;
let b2=40;
let b3=400;
console.log(Array.of(b1,b2,b3));



let user={
    name:"Sam",
    age:45,
    "email":"s@gmail.com"
}


console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user["email"]);


const sym=Symbol("myk");

let obj={
    name:"Ram",
    id:121,
    [sym]: "k2"
}


console.log(obj.id);
console.log(obj.name);


Object.freeze(obj);

obj.name="Harry";

console.log(obj);



obj.greet=function(){
    console.log(`Hello ${this.name}, Good Morning`);
}

console.log(obj.greet())



