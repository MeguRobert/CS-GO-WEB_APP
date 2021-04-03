

function DisplayAge() {

  let d = new Date();
  let input = document.getElementById("user_date_of_birth").value;
  if (input == "") return;
  let user = new Date(input);
  //calculate the Time zone Offset from user's time 
  let offset = new Date().getTimezoneOffset() * 1000 * 60;
  let newtimeinmilisec = d.getTime() - user.getTime() - offset;
  let sec = parseInt(newtimeinmilisec / 1000);
  let min = parseInt(sec / 60);
  let ore = parseInt(min / 60);
  let zi = parseInt(ore / 24);

  ShowTime(zi, ore ,min, sec);

}

function ShowTime(zi, ore, min, sec) {
  
  let text = "You have already lost this time "+"<br>"+"in your life playing video games: " + "<br><br>"
    + "days: " + zi + "<br>"
    + "hours: " + ore + "<br>"
    + "minutes: " + min + "<br>"
    + "seconds: " + sec + "<br><br>"
    + "Now it`s time to make it real!"
    ;
  document.getElementById("output2").innerHTML = text;
}

setInterval(DisplayAge, 1000);

