//object literal

let lion ={
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 ={
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}

//object constructor is a function
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;

    }
}

//create object

let lionC = new Animal("Simba",true,"Carnivore");
console.log(lionC.feed());
console.log(lionC);



//create a constructor
//school,student, instructor, assignment, courses,exam



let Exam1 ={
    passed:true,
    failed:false,
    grade:"A+"
}

function Exam(passed,failed,grade){
    this.passed=passed;
    this.failed=failed;
    this.grade=grade;
    this.newgrade=90;
    this.grade1=function(){
        
        this.newgrade=this.newgrade-10;
        console.log("Your new grade is: ",this.newgrade);
    }

}

console.log(Exam1);

//create object for exam
let ExamA = new Exam(true,false,"A+");
console.log(ExamA.grade1());
