function noFemaleCT()
{

    // Get the checkbox
    var terro = document.getElementById("terro");
    //parent gender
    var Select = document.getElementById("select_gender");
    // Remove the female gender
    var female_terro = document.getElementById("female");

    if (terro.checked == true){
        female_terro.remove();   
        
    }
    var x = document.getElementById("select_gender").childElementCount;
    if(x==1)
    {
        //console.log(x);
        withFemaleCT();
    }
}

function withFemaleCT()
{
    var male_CT = document.getElementById("male");
    if(male_CT.checked == true )
    {
        //sa readaugam female cand Counter-Terro e selectat
        var female_add = document.createElement('option');
        var node = document.createTextNode("Female");
        female_add.appendChild(node);
        Select.appendChild(female_add);
    }   
}

function GenerateCharacter(){
    console.log("POZA CARACTER");
}
