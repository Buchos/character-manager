document.getElementById("submit").addEventListener('click', () => {

          
    let nameInputValue = document.getElementById("name").value;
    let shortDescriptionValue = document.getElementById("shortDescription").value;
    let fullDescriptionValue = document.getElementById("description").value
    let imageValue = document.getElementById("image").value
    
    if(nameInputValue == false ){
      alert('The form has to be completed to create a new character'); 
    } else {
      createCharacter();
    }
    
    async function createCharacter() {

      let newCharacter = {
        name : nameInputValue,
        shortDescription : shortDescriptionValue,
        description: fullDescriptionValue,
        image: imageValue
      }

      const newCharacterInApi = await fetch("https://character-database.becode.xyz/characters", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newCharacter),
      });
      return newCharacterInApi;
    };
  });   