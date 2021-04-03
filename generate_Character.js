let character = document.getElementById("character_image");

function GenerateCharacter() {
  // cream divul children
  let user_character = document.createElement('div');

  // adaugam un id pentru identificare individuala si stilizare
  user_character.id = mapName;

  user_character.classList.add('character');
  
  character.appendChild(user_character);
}