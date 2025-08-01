const body={
    email:"s@gmail.com",
    fullname:{
        username:{
            fname:"ganesh",
            lname:"Jadhav"
        }
    }
}

console.log(body.fullname.username.lname);
console.log(body.email);


const ob1={1:"A",2:"B"}
const ob2={3:"C",4:"D"}

const ob3=Object.assign(ob1,ob2);
console.log(ob3);

const ob4={...ob1 , ...ob2}
console.log(ob4);


console.log(Object.keys(ob2))
console.log(Object.values(ob2))
console.log(Object.entries(ob2));


const us=[
    {
    id:101, name:"Tom",
    },
    {
    id:102, name:"Kitty"                                       
    }
]

console.log(us[1].name);

console.log(Object.entries(us));



const tinder={
    id:45,
    name:"bunny"
}


console.log(tinder["id"]);


console.log(tinder.hasOwnProperty("namsse"));



const u={
    name:"Fan",
    course:"JS",
    price:78555
}

console.log(u.price);

const {course}=u;
const {name}=u;
const {price}=u;

console.log(course);
console.log(name);
console.log(price);


const {course:c}=u;
const {name:n}=u;
const {price:p}=u;

console.log(c);
console.log(n);
console.log(p);

