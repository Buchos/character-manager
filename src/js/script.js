const temp = document.getElementById("template");
const target = document.getElementById("target");

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
            target.appendChild(copy);
        });
    });