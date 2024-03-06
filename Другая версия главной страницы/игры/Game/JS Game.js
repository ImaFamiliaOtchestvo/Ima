const pole = document.getElementById("pole");
document.addEventListener ("click",  jump);
var pers = document.getElementById('pers');

function jump () {
    pers.classList.add("animate");
    setTimeout(removeJump, 300); // 300мс = длина анимации
};
function removeJump () {
    pers.classList.remove("animate");
};