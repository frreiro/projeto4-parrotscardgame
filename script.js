const gifs = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif',
'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif',]
gifs.sort(comparador); // Embaralha os gifs

// os nomes das cartas entram nesse array
// [carta0, carta1, ....] 
const nomeCartas = []; 


// cartas clicadas 
let arrayCartasClicadas = [] // tem sempre dois elementos dentro dele só


/* ---- insere a quantidade de cartas pedidas --- */ 
let quantidadeCartas = prompt("Insira numeros pares de 4 a 14 para jogar");
while((quantidadeCartas %2 !==0) || (quantidadeCartas < 4) || (quantidadeCartas > 14)){
    quantidadeCartas = prompt("Insira numeros pares de 4 a 14 para jogar");
}
console.log(`Numero de cartas é ${quantidadeCartas}`);


/* --- Insere as quantidades de cartas no HTML --- */
for(let i=0; i<quantidadeCartas; i++){
    let classeCartas = document.querySelector(".cartas");
    classeCartas.innerHTML = classeCartas.innerHTML + `<div class="carta" onclick="changeImg(this,'carta${i}')"><div class="front-face face"><img src="Imagens/front.png" alt="Papagaio"/></div></div>`
    nomeCartas [i] = "carta"+i; // Cria e add os nomes no array 
    console.log("colocando as cartas....");
}

metadeQuantidadeCartas = quantidadeCartas / 2;

/* --- Coloca dentro de um array os valores das cartas
    ex: 6 cartas no jogo seus valores serão:  
    valorDasCartasTotal = [0, 1 , 2 , 0 , 1, 2] --- 
        4 cartas no jogo seus valores serão:  
    valorDasCartasTotal = [0, 1 , 0 , 1] --- */
let valorDasCartasTotal = [];
for(let k=0;k < 2; k++){
    for (let m=0 ; m < metadeQuantidadeCartas; m++){
        valorDasCartasTotal.push(m)
    }
}


/* --- Sincroniza cada carta com seu respectivo valor
        add no arrayCartasClicadas dois valores
        ex: arrayCartasClicadas = [0 , 1]
        ou arrayCartasClicadas = [ 1, 1 ], etc ----  */
let cartaClicada = null;
function identificarCartaClicada(){
    for(let i=0; i<quantidadeCartas; i++){
        if(identificarCarta === nomeCartas[i]){
            cartaClicada = valorDasCartasTotal[i];
            console.log(cartaClicada);
            arrayCartasClicadas.push(valorDasCartasTotal[i])
        }
    }

}
/* --- Ler se os pares dentro do array são iguais --- */
function leitorArrayDeCartasClicadas(){
    if(arrayCartasClicadas.length === 2 ){
        if(arrayCartasClicadas[0] === arrayCartasClicadas[1]){
            return true;
        }else if (arrayCartasClicadas[0] !== arrayCartasClicadas[1]){
            return false;
        }
    }
}

// valorDasCartas.sort(comparador); // Embaralha as cartas do array


function comparador() { 
	return Math.random() - 0.5; 
}



// CÓDIGO FUNCIONA A PARTIR DAQUI SE NÃO OS 
// NUMERO NÃO SERÃO IGUAIS



let identificarCarta = null;
let contadorDeClicks = 0;
let primeiroElemento = null;
let segundoElemento = null;
let contadorDePontos = 0;
let contadorDeClicksGlobal = 0;

// Vira duas cartas 
function changeImg(divPai, id) {

    identificarCarta = id;
    contadorDeClicks += 1;
    contadorDeClicksGlobal += 1;


    identificarCartaClicada();

    /* --- o clique vira apenas 2 cartas ---- */
    if(contadorDeClicks === 2){
        virarCarta(divPai);
        segundoElemento = divPai;   

        
    }else if(contadorDeClicks < 2){
        virarCarta(divPai);
        primeiroElemento = divPai;
    }

    /* --- Compara se não teve clique na mesma carta --- */
    if( primeiroElemento !== segundoElemento){
        
        // Acertou uma dupla
        if(leitorArrayDeCartasClicadas() === true){
            console.log('ACERTOU UMA JOGADA');
            // add a classe 'selecionados' nas duas ultimas cartas selecionadas
            primeiroElemento.children[0].classList.add("selecionado");
            segundoElemento.children[0].classList.add("selecionado");
            
            contadorDeClicks = 0;
            arrayCartasClicadas = [];
            primeiroElemento = null;
            segundoElemento = null;
            contadorDePontos += 1;
            if(contadorDePontos === metadeQuantidadeCartas){
                setTimeout(verificarSeGanhou,500);
            }
            
        }else if (leitorArrayDeCartasClicadas() === false) {

            console.log('ERROU !! TENTE NOVAMENTE');
            setTimeout(desvirarAsCartas, 1000);
        }
    }else {
        setTimeout(desvirarAsCartas, 1000);
    }
}


function virarCarta(elementoPai){
    const elementoFilho = elementoPai.children
    elementoFilho[0].classList.add("virar-carta");
    for(let i=0; i<quantidadeCartas; i++){
        if( cartaClicada === i ){
            elementoFilho[0].innerHTML = `<img src="Imagens/${gifs[i]}" alt="Papagaio"/> `
        }
    }
}



// Desvira as cartas que não contem a classe 'selecionado'
function desvirarAsCartas(){
    let elemento = document.querySelectorAll(".virar-carta");
    for(let j=0; j<elemento.length; j++){
        if(!elemento[j].classList.contains("selecionado")){
            elemento[j].classList.remove('virar-carta');
            elemento[j].innerHTML = `<img src="Imagens/front.png" alt="Papagaio"/> `
        }    
    }
    contadorDeClicks = 0;
    arrayCartasClicadas = []; // Recomeça o array;
    primeiroElemento = null;
    segundoElemento = null;
}

function verificarSeGanhou(){
    console.log('PARABÉNS !!! VOCÊ GANHOU');
    alert(`Você ganhou em ${contadorDeClicksGlobal} jogadas!`)   
}