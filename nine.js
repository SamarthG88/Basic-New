// let coding=["Java","Python","C++","JavaScript"]

// for(const v of coding){
//     console.log(v);
// }



// Maps

// const m=new Map();

// m.set("c","C program");
// m.set("js","JavaScript");
// m.set("py","Python");

// for(const [key,value] of m){
//     console.log(key+" : "+value);
// }



// const myobj={name:"Faran",id:1};


// for(const key in myobj){
//     console.log(`${key} and value is ${myobj[key]}`);
// }


const data=["jjj","lll","aaa","qqq","zzz"]

// data.forEach(function(i){
//     console.log(i);
// })


// data.forEach( (item) => {
//     console.log(item)
// })


// data.forEach( (item,index,ar) => {
//     console.log(item, index, ar);
// })


const user=[
    {id:1,"name":"Rupees"},
    {id:2,"name":"Dollars"},
    {id:3,"name":"cents"},
]

user.forEach( (key) => {
    console.log(key.id);
    console.log(key.name);
})