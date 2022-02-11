let names = ["Victoria","Mark","Mike","Phil"];


let mixed=[99,"Derek",true,null,45,"Hello"];

function displayName(){
    for(let i=0;i<names.length;i++){
        console.log(names[i])
    }
}
//displayName();

//exercise

let ages=[15,34,35,78,98,50];
function displayAges(){
    for(let i=0;i<ages.length;i++){
        console.log(names[i])
    }
}
//displayAges();

//objects literal
 
let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["Eminem","Coldplay","Rolling Stones"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}

//travel the names or whatever you want to list
//console.log(student.name); 

console.log(student.address.country);

//console.log(student["student"]);


//console.log(student["music"][0]);
//or this way
//console.log(student.music[0]);


//array with objects
let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:true
    },
    {
        name:"Arturo",
        age:23,
        activeStudent:true
    },
    {
        name:"Mark",
        age:30,
        activeStudent:false
    }
]

console.log(students);

