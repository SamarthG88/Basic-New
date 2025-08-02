const fun= ()=>{
    console.log("Hello Buddy");
}

fun();



const good=(n1,n2)=>{
    return (`Your Numbers is ${n1} & ${n2} sum is ${n1+n2}`);
}

console.log(good(45,78));


const sum=(n1,n2)=>(n1+n2)

console.log(sum(7,5));

const obj=(n1,n2)=>({name:"naveen"});

console.log(obj(2,1));






function fun(){
    console.log("This Is Normal Function");
}

fun();


(function fun1(){
    console.log("This Is IIFE1");
})();


(function fun2(){
    console.log("This is IIFE2");
})();



(()=>{
    console.log("Welcome");
})();



((name)=>{
    console.log(`Name is ${name}`)
})("Deeps")