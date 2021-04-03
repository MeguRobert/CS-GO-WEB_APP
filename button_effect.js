let btn_generateCharacter = document.getElementById('button_submit');
document.addEventListener('DOMContentLoaded', function () {
  btn_generateCharacter.addEventListener('click', function () {
    document.body.classList.add('flash');
    
  });
});
setInterval(remove_blink,1500);

function remove_blink()
{
    document.body.classList.remove('flash');
}