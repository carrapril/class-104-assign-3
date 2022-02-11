let salon={
    name:"The Fashionable Pet",
    address:{
        street:"123 Ave.",
        ZIPcode:"12345",
        number:"555-555-5555"
    },
    hours:{
        open:"9:00AM",
        close:"5:00PM"
    },

    pets:[
        
    ]

}   


function displayPetNames(){
    alert(`You have: ${salon.pets.length} pets.`);
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pet[i]);
    }
}

//create the constructor
function Pet(name,age,gender,breed,owner,service,number){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.owner=owner;
    this.service=service;
    this.number=number;


}

//create 3 pets using the constructor

let Scooby = new Pet("Scooby",50, "Male","Pit Bull","John","Wash", "555-555-5555");
let Daisy = new Pet("Daisy",3,"Female","Shi Tzu","Sally","Full Service","248-123-4567");
let Sunny = new Pet("Sunny",5,"Male","German Shepard","Tommy","Nail Trim","123-456-7890");
let Janis = new Pet("Janis",21,"Female","Yorkie","Jessica","Wash","543-456-7890");
//register the pets


//getting the inputs from the html
let petName = document.getElementById("petName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let txtBreed = document.getElementById("txtBreed");
let txtOwner = document.getElementById("txtOwner");
let petService = document.getElementById("selService");
let txtOwnerNumber = document.getElementById("txtOwnerNumber");

function register(){

    console.log("Register");

    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,txtBreed.value,txtOwner.value,selService.value,txtOwnerNumber.value);
    console.log(thePet);
    //push the obj into the array
    salon.pets.push(thePet);
    //disp the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have register a new pet!");
}
//search function 
function searchPet(){
    document.getElementById("btnClear").hidden = false;
    let name=document.getElementById("txtSearch").value;
    document.getElementById("headerList").innerHTML = "Search Result";

    document.getElementById("petList").innerHTML="";
    //travel the array (loop)
    for(let i=0;i<salon.pets.length;i++){
        //create card
        console.log(createCard(salon.pets[i], i));
        
        if(name == salon.pets[i].name){
            document.getElementById("petList").innerHTML +=
            createCard(salon.pets[i], i);
        }
        
    }

}


//function to display pets 
function showPetsCards(){
    document.getElementById("headerList").innerHTML="Pets List";
    document.getElementById("btnClear").hidden = true;
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array (loop)
    for(let i=0;i<salon.pets.length;i++){
        //create card
        console.log(createCard(salon.pets[i], i));
        //append the card
        document.getElementById("petList").innerHTML +=
        createCard(salon.pets[i], i);
    }
}

//define a remove pet function 
function removePet(index){
    if(index < salon.pets.length){

        salon.pets.splice(index,1);
    }
    showPetsCards();
    
}

//add table replace with tr, th, td

function createCard(pet, index=0){
    return `
        <div class="pet-card">
           <table id="pet-info">
             <tr>
               <th>Pet Name</th>
               <th>Age</th>
               <th>Gender</th>
               <th>Breed</th>
               <th>Owner</th>
               <th>Service</th>
               <th>Owner Number</th>
               <th></th>
             </tr>
             <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.owner}</td>
                <td>${pet.service}</td>
                <td>${pet.number}</td>
                <td id="tab-btn"><button id="delete" onclick="removePet(${index});" >DELETE</button></td>
             </tr>  
            
             
           </table>
           
            
        </div>
    `;  
}

function init(){
    let Scooby = new Pet("Scooby",50, "Male","Pit Bull","John","Wash", "555-555-5555");
    let Daisy = new Pet("Daisy",3,"Female","Shi Tzu","Sally","Full Service","248-123-4567");
    let Sunny = new Pet("Sunny",5,"Male","German Shepard","Tommy","Nail Trim","123-456-7890");

    salon.pets.push(Scooby,Daisy,Sunny,Janis); // push the element into the array
    showPetsCards();

}

//not adding () causes it to wait
window.onload=init;






