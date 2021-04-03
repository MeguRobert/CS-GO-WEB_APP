var character = document.getElementById("character_image");

function GenerateCharacter()
{
  let id;
  let teams = document.getElementsByName('teams');
  if (teams[0].checked) {
    //if is counterterro
    let selector = document.getElementById('select_gender');
    let gender = selector.value;
    if (gender == 'female') {
      id = 'antiterro_female';
    }
    else
    {
      id = 'antiterro_male';
    }
  }
  else
  {
    if(teams[1].checked)
    {
      id = 'terro_male';
    }
  }
  if(id != undefined)
    CreateCharacter(id);
}

function CreateCharacter(id)
{
  character.id = id;
}