document.addEventListener('submit', function(event){
    event.preventDefault()
})


//#region 1
 function Pressed() 
{
  abled=""
}
function DisplayMessage() {
  var userinput = document.getElementById("user_name").value;
  text = "Hello, " + userinput + "!";
  if (userinput == "") text = "";
     showName();
}
function showName() {
  document.getElementById("output").innerHTML = text;
}
setInterval(DisplayMessage, 1000);


function red() {
  document.getElementById("output").style.color = "#ff0000";
}
function green() {
  document.getElementById("output").style.color = "#00ff00";
}

//#endregion 



//#region Clock
function DisplayTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let clock;
  clock = checker(h);
  clock += ":";
  clock += checker(m);
  clock += ":";
  clock += checker(s);
  document.getElementById("clock").innerHTML = clock;
}
function checker(value) {
  if (value<10) {
    return "0" + value;
  }
  return value;
}
setInterval(DisplayTime, 1000);

//#endregion




function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
    text.style.display = "none";
  }
}

