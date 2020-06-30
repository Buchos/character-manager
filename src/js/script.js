// const axios = require('axios');

const temp = document.getElementById("template");
const target = document.getElementById("target");




// fetch de tout les personages au chargement de la page
fetch("https://character-database.becode.xyz/characters")
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        const charsArray = response;
        charsArray.forEach((element) => {
            const copy = document.importNode(temp.content, true);
            copy.querySelector(".pic").src = `data:image/gif;base64,${element.image}`;
            copy.querySelector(".name").innerHTML = element.name;
            copy.querySelector(".descr-short").innerHTML = element.shortDescription;
            copy.querySelector(".descr-long").innerHTML = element.description;
            target.appendChild(copy);
        });
    });


// lors du click sur le boutton de recherche, affichage des persos avec un nom ou une partie de nom correspondant
document.getElementById("searchChar").addEventListener("click", () => {

    document.getElementById("template").style.display = "none";
    
    var searchName = document.getElementById("searchName").value;

    fetch ("https://character-database.becode.xyz/characters?name=" + String(searchName))
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            const charsArray = response;
            charsArray.forEach((element) => {
                const copy = document.importNode(temp.content, true);
                copy.querySelector(".pic").src = `data:image/gif;base64,${element.image}`;
                copy.querySelector(".name").innerHTML = element.name;
                copy.querySelector(".descr-short").innerHTML = element.shortDescription;
                copy.querySelector(".descr-long").innerHTML = element.description;
                target.appendChild(copy);
            });
        });
});


// Lors du click sur le boutton edit propre a chaque perso, passage sur la page de modification des personages
document.querySelectorAll(".editChar").addEventListener("click", () => {


});


// lors du click sur le bouton delete propre a chaque perso, demande de confirmation et suppression du perso concerné
document.querySelectorAll(".deleteChar").addEventListener("click", () => {
    if (confirm ("Are you sure you want to delete this character ?")) {

    } else {

    }

});