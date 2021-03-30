  // primeste informatiile din primul formular
  //querySelector primeste primul element care indeplineste proprietatile date
  //querySelectorAll primeste pe toate care indeplinesc proprietatile date
var map = document.forms[0].querySelectorAll('input[name = "map"]');
var i;
// div-ul in care dorim sa cream elementele:
var divForMaps = document.getElementById("getmaps");

function ClearMap() {
  //va explic oral :))
  var firstChild = divForMaps.firstChild;
  while( firstChild ) {
    divForMaps.removeChild( firstChild );
    firstChild = divForMaps.firstChild;
  }
}
function CreateMap(mapName) {
  // cream divul children
  let mymap = document.createElement('div');
  // cream numele divului
  let text = document.createTextNode(mapName);
  // adaugam clasa maps pentru stilizare
  mymap.classList.add('maps');

  // adaugam textul in divul nostru copil
  mymap.appendChild(text);

  // adaugam un id pentru identificare individuala
  mymap.id = mapName;
  
  /// error: nu intra in if, doar in else... why?
  if (divForMaps.contains(mymap)) {
    console.log("error");
  }
  else
  {
    divForMaps.appendChild(mymap);
  }
}
// mechanismul checkboxului All maps
var allmap = document.getElementById('allmap');
document.addEventListener('DOMContentLoaded', function () {
  allmap.addEventListener('click', function () {
      for (i = 0; i < map.length - 1; i++) {
        map[i].checked = allmap.checked;
    }
    
  }, false);
}, false);

// GENERAREA MAPURILOR
function Maps() {
  ClearMap();
  let allMapIsChecked = true;
  for (i = 0; i < map.length - 1; i++) {
    // se uita la fiecare element 
    // din selectia map exclusiv all maps
    if (map[i].checked) {
      CreateMap(map[i].value,i);
    }
    else
    {
      allMapIsChecked = false;
    }
  }
  allmap.checked = allMapIsChecked;
}

setInterval(() => {
  Maps();
}, 10);