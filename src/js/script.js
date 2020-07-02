
const temp = document.getElementById("template");
const target = document.getElementById("target");


// fetch de tout les personages au chargement de la page
fetch("https://character-database.becode.xyz/characters")
    .then((response) => response.json())
    .then((response) => {
        const charsArray = response;

        let i = 0
        
        charsArray.forEach((element) => {
            const copy = document.importNode(temp.content, true);
            copy.querySelector(".pic").src = `data:image/gif;base64,${element.image}`;
            copy.querySelector(".name").innerHTML = element.name;
            copy.querySelector(".descr-short").innerHTML = element.shortDescription;
            target.appendChild(copy);
            let iconId = document.createElement("i")
            iconId.classList.add("dododo")
            iconId.setAttribute("meta-icon-id", element.id)
            iconId.innerHTML = "delete"
            document.getElementById("delete").appendChild(iconId)
            // let deletebutton = querySelectorAll(".deleteButton")
            // deletebutton[index].appendChild(iconId)
            i++;
        });
    });

    
    //Lors du click sur le boutton edit propre a chaque perso, passage sur la page de modification des personages
    async function updateCharacter(id) {
        let url = "https://character-database.becode.xyz/characters/" + id;
          
        fetch(url, {
          method: "PUT",
          headers: new Headers({
            "content-type": "application/json"
          })
        })

        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
      }
    
    
    // lors du click sur le bouton delete propre a chaque perso, demande de confirmation et suppression du perso concerné
    async function deleteCharacter(id) {
      if ( confirm( "Are you sure you want to delete this character ?") ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
        let url = "https://character-database.becode.xyz/characters/" + id;
          
        fetch(url, {
          method: "DELETE",
          headers: new Headers({
            "content-type": "application/json"
          })
        })

        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    } else {
        // Code à éxécuter si l'utilisateur clique sur "Annuler" 
        window.location.reload()

          
    }


      }



    document.querySelector("body").addEventListener("click", e => {

      if (e.target.classList.contains("dododo")) {
        deleteCharacter(e.target.getAttribute("meta-icon-id"))

      }

    })

    


    


    // lors du click sur le boutton de recherche, affichage des persos avec un nom ou une partie de nom correspondant

        // document.getElementById("searchChar").addEventListener("click", () => {
        
        //     // document.querySelectorAll(".card").style.display = "none";
            
        //     var searchName = document.getElementById("searchName").value;
        
        //     fetch ("https://character-database.becode.xyz/characters?name=" + String(searchName))
        //         .then((response) => response.json())
        //         .then((response) => {
        //             const charsArray = response;
        //             charsArray.forEach((element) => {
        //                 const copy = document.importNode(temp.content, true);
        //                 copy.querySelector(".pic").src = `data:image/gif;base64,${element.image}`;
        //                 copy.querySelector(".name").innerHTML = element.name;
        //                 copy.querySelector(".descr-short").innerHTML = element.shortDescription;
        //                 // copy.querySelector(".descr-long").innerHTML = element.description;
        //                 target.appendChild(copy);
        //             });
        //         });
        // });
  