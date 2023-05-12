$(document).ready(() => {
    $("#playI").click(jugarUno);
    $("#playII").click(jugarDos);
    $("#reset").click(volverInicio);
});

var turno = 0;
var tablero = new Array(); //arreglo de btns.
var eligioFicha = "no";
var fichaPc = "no";
var cantPlayers = 0;
var numero = 0;

function volverInicio() {
    location.reload(); //recargo la pag para limpiar el tablero.
}
//llenar el array

//jugar con otro humano
function jugarDos() {
    $("#players").hide();
    $("#tablero").show();
    tablero[0] = document.getElementById("b0");
    tablero[1] = document.getElementById("b1");
    tablero[2] = document.getElementById("b2");
    tablero[3] = document.getElementById("b3");
    tablero[4] = document.getElementById("b4");
    tablero[5] = document.getElementById("b5");
    tablero[6] = document.getElementById("b6");
    tablero[7] = document.getElementById("b7");
    tablero[8] = document.getElementById("b8");
    turno = 1;
    cantPlayers = 2;
    colocar();
}

function colocar (boton, jugadasPc){
    if(cantPlayers == 2){
        if(turno == 1 && boton.value =="a"){
            turno = 2;
            boton.value = "X";
            boton.className ="visible";
        }else if(turno == 2 && boton.value =="a" ){
            turno = 1;
            boton.value = "O";
            boton.className ="visible"; 
        }
        validar();
    }
    if(cantPlayers == 1){
        if(turno == 1 && boton.value =="a"){
            turno = 2;
            boton.value = "X";
            boton.className ="visible";
        }else if(turno == 2){
            jugadasPc();
            if(tablero[num].boton.value =="a"){
                document.getElementById(tablero[num].boton.getElementById()).disabled = false;
                turno = 1;
                tablero[num].boton.value = "O";
                tablero[num].boton.className = "visible";
            }
        }
        validar();
    }
}
function validar(){
    if((tablero[0].value=="X" && tablero[1].value=="X" && tablero[2].value=="X")
    || (tablero[3].value=="X" && tablero[4].value=="X" && tablero[5].value=="X")
    || (tablero[6].value=="X" && tablero[7].value=="X" && tablero[8].value=="X")
    || (tablero[0].value=="X" && tablero[3].value=="X" && tablero[6].value=="X")
    || (tablero[1].value=="X" && tablero[4].value=="X" && tablero[7].value=="X")
    || (tablero[2].value=="X" && tablero[5].value=="X" && tablero[8].value=="X")
    || (tablero[0].value=="X" && tablero[4].value=="X" && tablero[8].value=="X")
    || (tablero[2].value=="X" && tablero[4].value=="X" && tablero[6].value=="X")
    ){
        alert("Player 1 WINNER");
        location.reload();
    }
    else if((tablero[0].value=="O" && tablero[1].value=="O" && tablero[2].value=="O")
    || (tablero[3].value=="O" && tablero[4].value=="O" && tablero[5].value=="O")
    || (tablero[6].value=="O" && tablero[7].value=="O" && tablero[8].value=="O")
    || (tablero[0].value=="O" && tablero[3].value=="O" && tablero[6].value=="O")
    || (tablero[1].value=="O" && tablero[4].value=="O" && tablero[7].value=="O")
    || (tablero[2].value=="O" && tablero[5].value=="O" && tablero[8].value=="O")
    || (tablero[0].value=="O" && tablero[4].value=="O" && tablero[8].value=="O")
    || (tablero[2].value=="O" && tablero[4].value=="O" && tablero[6].value=="O")
    ){
        alert("Player 2 WINNER");
        location.reload();
    }
}
//jugar con la IA
function jugarUno() {   
    $("#players").hide();
    $("#tablero").show();
    tablero[0] = document.getElementById("b0");
    tablero[1] = document.getElementById("b1");
    tablero[2] = document.getElementById("b2");
    tablero[3] = document.getElementById("b3");
    tablero[4] = document.getElementById("b4");
    tablero[5] = document.getElementById("b5");
    tablero[6] = document.getElementById("b6");
    tablero[7] = document.getElementById("b7");
    tablero[8] = document.getElementById("b8");
    turno = 1;
    cantPlayers = 1;
    colocar();
}
function jugadasPc(){
    var num = -1;
    if(tablero[4].value == "a"){
        num = 4;
    }
    else if(tablero[4].value != "a"){
        num = 8;
    }
    else if(tablero[4].value != "a" & tablero[5].value != "a"){
        num = 3;
    }
    else if(tablero[4].value != "a" & tablero[3].value != "a"){
        num = 5;
    }
    else if(tablero[4].value != "a" & tablero[1].value != "a"){
        num = 7;
    }
    else if(tablero[4].value != "a" & tablero[7].value != "a"){
        num = 1;
    }
    else if(tablero[4].value != "a" & tablero[0].value != "a"){
        num = 8;
    }
    else if(tablero[4].value != "a" & tablero[8].value != "a"){
        num = 0;
    }
    else if(tablero[4].value != "a" & tablero[6].value != "a"){
        num = 2;
    }
    else if(tablero[4].value != "a" & tablero[2].value != "a"){
        num = 6;
    }
    else if(tablero[0].value != "a" & tablero[1].value != "a"){
        num = 2;
    }
    else if(tablero[2].value != "a" & tablero[1].value != "a"){
        num = 0;
    }
    else if(tablero[6].value != "a" & tablero[7].value != "a"){
        num = 8;
    }
    else if(tablero[7].value != "a" & tablero[8].value != "a"){
        num = 6;
    }
    else if(tablero[2].value != "a" & tablero[5].value != "a"){
        num = 8;
    }
    else if(tablero[5].value != "a" & tablero[8].value != "a"){
        num = 2;
    }
    else if(tablero[2].value != "a" & tablero[8].value != "a"){
        num = 5;
    }
    else if(tablero[0].value != "a" & tablero[3].value != "a"){
        num = 6;
    }
    else if(tablero[3].value != "a" & tablero[6].value != "a"){
        num = 0;
    }
    else if(tablero[0].value != "a" & tablero[6].value != "a"){
        num = 3;
    }
    else if(tablero[6].value != "a" & tablero[8].value != "a"){
        num = 7;
    }
    else if(tablero[0].value != "a" & tablero[2].value != "a"){
        num = 1;
    }
    num;
}
