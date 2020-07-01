
const temp = document.getElementById("template");
const target = document.getElementById("target");


// fetch de tout les personages au chargement de la page
fetch("https://character-database.becode.xyz/characters")
    .then((response) => response.json())
    .then((response) => {
        const charsArray = response;
        charsArray.forEach((element) => {
            const copy = document.importNode(temp.content, true);
            copy.querySelector(".pic").src = `data:image/gif;base64,${element.image}`;
            copy.querySelector(".name").innerHTML = element.name;
            copy.querySelector(".descr-short").innerHTML = element.shortDescription;
            target.appendChild(copy);
        });
    });

    
    // Lors du click sur le boutton edit propre a chaque perso, passage sur la page de modification des personages
        // document.getElementsByClassName("fa-edit").addEventListener("click", () => {
        //     fetch("https://character-database.becode.xyz/characters/" + id, {
        //         method: "PUT",
        //         body: JSON.stringify({
        //             name: charName,
        //             shortDescription: charShortDescription,
        //             description: charDescription,
        //             image: charImage,
        //         })
        //     })
        //     .then(response => response.json())
            
        //     });
    
    
    // lors du click sur le bouton delete propre a chaque perso, demande de confirmation et suppression du perso concerné
    function deleteCharacter(id) {

        const characterObject = JSON.stringify({

            id: id

          });

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

      }
    let array = document.getElementsByClassName("deleteButton");
    console.log (array);
    console.log (array[2]);
    for (let i=0; i<array.length; i++){
        console.log ("bjr")

    }
      
      document.getElementsByClassName("fa-window-close").addEventListener("click", () => {
    //       let confirmBox = confirm("Are you sure you want to delete this character ?");
    //       if(confirmBox === true) {
      
    //         let indexFromDataDeleteCharacter = e.target.getAttribute("data-deleteCharacter");
    //         deleteCharacter(indexFromDataDeleteCharacter);
            
    //         }
        console.log (id)
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
