const ar=[10,20,30,40,50,60]

const res=ar.filter((i)=>{
    console.log(i);
})



const res1=ar.filter( (n)=> n>20)
console.log(res1);



const obj=[
    {name:"Deeps",age:18},
    {name:"Faran",age:5},
    {name:"Dj",age:12},
]


const ans=obj.filter( (u) => {
    return u.age===5;
})

console.log(ans);



const books=[
    {bookname:"book1",genre:"F",price:999},
    {bookname:"book2",genre:"H",price:2500},
    {bookname:"book3",genre:"P",price:5000},
    {bookname:"book3",genre:"H",price:500},
]


const find=books.filter( (b) => {
    return b.genre==="H" && b.price===2500;
})


console.log(find);









const s=[1,2,3,4,5]

const m=s.map( (i) => {
    return i
})

console.log(m);



const result=s.map( (n) => n*10)
              .map( (n) => n+1)
              .filter( (n) => n>=30)

console.log(result);








const r1=[1,2,3,4,5]


const res=r.reduce(function(acc,currval){
            console.log(`acc: ${acc} and currentValue: ${currval}`);
            return acc+currval;
    },5)
    
    console.log(res);
    
    
    
const r2=[10,20,30,40,50]
const res=r2.reduce( (acc,val) => {
    console.log(`acc: ${acc} and currentValue: ${val}`);
    return acc+val
},0)

console.log(res);



const products=[
    {course:"JS",price:999},
    {course:"PY",price:2000},
    {course:"C",price:500},
]


const total=products.reduce( (acc,p) => {
    console.log(`acc: ${acc} price: ${p.price}`);
    return acc+p.price;
},0)

console.log(total);
