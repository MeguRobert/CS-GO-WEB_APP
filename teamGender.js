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

// is not implemented correctly

// TEST GIT PUSH/PULL

// this is actually work!




