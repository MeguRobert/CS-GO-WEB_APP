function noFemaleTerro()
{
    var select = document.getElementById("select_gender");
    var terroCheckBox = document.getElementById("terro");
    var female = document.getElementById('female');
    if (terroCheckBox.checked) {
        select.removeChild(female);
    }
    else
    {
        
    }
}





