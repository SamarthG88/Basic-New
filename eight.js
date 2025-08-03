const ar=[10,2,0,25,4];

for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}



const ar1=[1,2,3,4,5]

for(let i=0; i<ar1.length; i++){
    for(let j=0; j<ar1.length; j++){
        console.log(`outer loop ${ar1[i]} and inner loop ${ar1[j]}`);
    }
}



for(let i=1; i<=10; i++){

    if(i==5){
        break;
    }
    console.log(i);
}



for(let i=1; i<=10; i++){

    if(i==5){
        continue;
    }
    console.log(i);
}




let s=1;

while(s<=10){
    console.log(s);
    s+=2;
}



let t=1;

do{
    console.log(t);
    t+=3;
}while(t<=20);