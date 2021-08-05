//Print out random user
console.dir(randUser);
console.dir(randUser.results[0].location);
console.dir(randUser.results[0].location.city);

for (let i = 0; i < 10; i++) {
    //Get references
let profiles = document.querySelector("#profile");

//Create elements
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

//Add content
text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "From: " + randUser.results[i].location.city + ", " + randUser.results[i].location.country;
newImg.src = randUser.results[i].picture.large;

//Add elements to the page
newDiv.appendChild(newImg);
newDiv.appendChild(text);
profiles.appendChild(newDiv);
}

for (let i = 10; i < 20; i++) {
    //Get references
let profiles = document.querySelector("#profile2");

//Create elements
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

//Add content
text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "From: " + randUser.results[i].location.city + ", " + randUser.results[i].location.country;
newImg.src = randUser.results[i].picture.large;

//Add elements to the page
newDiv.appendChild(newImg);
newDiv.appendChild(text);
profiles.appendChild(newDiv);
}

for (let i = 20; i < 30; i++) {
    //Get references
let profiles = document.querySelector("#profile3");

//Create elements
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

//Add content
text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "From: " + randUser.results[i].location.city + ", " + randUser.results[i].location.country;
newImg.src = randUser.results[i].picture.large;

//Add elements to the page
newDiv.appendChild(newImg);
newDiv.appendChild(text);
profiles.appendChild(newDiv);
}

for (let i = 30; i < 40; i++) {
    //Get references
let profiles = document.querySelector("#profile4");

//Create elements
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

//Add content
text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "From: " + randUser.results[i].location.city + ", " + randUser.results[i].location.country;
newImg.src = randUser.results[i].picture.large;

//Add elements to the page
newDiv.appendChild(newImg);
newDiv.appendChild(text);
profiles.appendChild(newDiv);
}

for (let i = 40; i < 50; i++) {
    //Get references
let profiles = document.querySelector("#profile5");

//Create elements
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

//Add content
text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "From: " + randUser.results[i].location.city + ", " + randUser.results[i].location.country;
newImg.src = randUser.results[i].picture.large;

//Add elements to the page
newDiv.appendChild(newImg);
newDiv.appendChild(text);
profiles.appendChild(newDiv);
}
