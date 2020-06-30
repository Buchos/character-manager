// fonction propre a la page de création d'un nouveau perso
document.getElementById("submit").addEventListener("click", () => {
    fetch("https://character-database.becode.xyz/characters", {
        method: "POST",
        body: JSON.stringify({
            name: charName,
            shortDescription: charShortDescription,
            description: charDescription,
            image: charImage,
        })
    })
    .then(response => response.json())

    });