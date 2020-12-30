let aleatorio = Math.floor(Math.random()*100);
let numero = document.getElementById("numero");
let texto = document.querySelector("#texto");
let boton = document.querySelector("#boton");



function alatoria(){
    switch(true){
        case numero.value == aleatorio:
            texto.innerHTML = `Felicidades el numero era ${aleatorio}!!!!!`;
            break;
        case numero.value > aleatorio:
            texto.innerHTML = `Te pasaste, el numero es menor`;
            break;
        case numero.value < aleatorio:
            texto.innerHTML = `Te falta, el numero es mayor`;
            break;
    }
}

boton.addEventListener("click",alatoria);


