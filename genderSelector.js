let teams = document.getElementsByName("teams");
let genderSelector = document.getElementById("select_gender");
let antiterroGender = `<option id = "male" value = "male">Male</option>
                   <option id = "female" value = "female" > Female</option> `;
let terroGender = `<option id = "male" value = "male">Male</option>`;
function Gender()
{
        if (teams[0].checked) {
            genderSelector.innerHTML = antiterroGender;
        }
        if (teams[1].checked) {
            genderSelector.innerHTML = terroGender;
        }
}