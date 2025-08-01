function myfun(){
    console.log("How Are You");
}

myfun();


function sum(n1,n2){
    console.log(`the sum of ${n1} and ${n2} is ${n1+n2}`);   
    return (`the sum of ${n1} and ${n2} is ${n1+n2}`)
    
}


console.log(sum(8,7));


function nums(...n){
    return n;
}

console.log(nums(4522,2455,785));



const row={
    name:"subin",
    id:452
}


function show(myob){
    console.log(`Your name is ${myob.name} and is ${myob.id}`);    
}

show(row);



const ar=[2,3,4,5,6,7];


function showar(getAr){
    return getAr[1];
}


console.log(showar([200,400,500,600]));

