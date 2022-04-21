let pets = [];

function Pet(name, age, gender, breed, owner, phone, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.owner = owner;
    this.phone = phone;
    this.service = service;
}

let pet1 = new Pet ("Tuigui", 11, "male", "chihuahua", "Alexis", "123-45-67", "nails");
let pet2 = new Pet ("Banana", 2, "female", "golden","Daniel", "234-56-78", "grooming");
let pet3 = new Pet ("Mia", 5, "female", "poodle", "Ramon", "345-67-89","nails");

console.log("3 PETS EXAMPLES:")
console.log(pet1, pet2, pet3);

function submitForm(event) {
    event.preventDefault();

    let petName = document.getElementById("txtName").value;
    let petAge = document.getElementById("txtAge").value;
    let petGender = document.getElementById("txtGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petOwner = document.getElementById("txtOwner").value;
    let petPhone = document.getElementById("txtPhone").value;
    let petService = document.getElementById("selService").value;

    let pet = new Pet(petName,petAge, petGender, petBreed, petOwner, petPhone, petService);
    pets.push(pet);
    console.log(pets);
    resetForm();
}

function resetForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("selService").value = "nails cut";
}
