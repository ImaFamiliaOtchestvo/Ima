var h1Id=document.getElementById("h1");
var btnId=document.getElementById('btn');
var counter=0;
btnId.addEventListener('click', 
function(){
    counter++;
    h1Id.textContent='Кликов сделано: ' + counter;
    
    if(counter == 50){
        alert("Крутой")
    }

    if(counter == 100){
        alert("Сильный")
    }

    if(counter == 250){
        alert("Непробиваемый")
    }

}
);