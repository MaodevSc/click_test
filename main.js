let textoContador = document.getElementById("boton");
let maxcps = document.getElementById("maxcps");
let mcount = document.getElementById("mcount");

var contador = 0;
function delay(time){
    return new Promise(resolve => setTimeout(resolve,time));
}

// async function contar(){
//     textoContador.innerHTML = contador++;
//     document.getElementById("boton").style.fontSize="28px";
//     await delay(300);
//     document.getElementById("boton").style.fontSize="25px";

// }

// function reset(){
//     textoContador.innerHTML = 0;
//     contador = 1;
// }

//-------------------------------------------------

var valormaximo = 0;
var decremento = -1;

async function contar(){
    mcount.innerHTML = contador + 1;
    contador ++;
    efectoTxt();
    maxvalue(contador);
    await delay(1000);
    mcount.innerHTML = contador -1;
    contador = contador - 1;
}


async function maxvalue(contador){
    await delay(100);
    var valoractual = contador
    if(valormaximo < valoractual){
        valormaximo = valoractual;
    }
    maxcps.innerHTML = valormaximo;
}

async function efectoTxt(){
    
    document.getElementById("mcount").style.fontSize="35px";
    await delay(300);
    document.getElementById("mcount").style.fontSize="32px";
}

const buttons = document.querySelectorAll(".wrapper");

buttons.forEach((button)=> {
    button.onclick = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(function(){
            ripple.remove();
        },1400);   
    }
    
});

buttons.forEach((button)=> {
    button.oncontextmenu = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(function(){
            ripple.remove();
        },1400);  
    }
    
});




















document.oncontextmenu = function(){
    return false;
}


