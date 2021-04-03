var teams = document.getElementsByName("teams");
var genderSelector = document.getElementById("select_gender");
var antiterroGender = `<option id = "male" value = "male">Male</option>
                   <option id = "female" value = "female" > Female</option> `;
var terroGender = `<option id = "male" value = "male">Male</option>`;
function Gender()
{
        if (teams[0].checked) {
            genderSelector.innerHTML = antiterroGender;
        }
        if (teams[1].checked) {
            genderSelector.innerHTML = terroGender;
        }
}

