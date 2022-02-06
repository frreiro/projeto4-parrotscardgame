const gifs = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif',
'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif',]
gifs.sort(comparador); // Embaralha os gifs

// os nomes das cartas entram nesse array
const nomeCartas = [];

// valores das cartas entram nesse array
const valorDasCartas= [];

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

/* --- Coloca dentro do array os valores de cada carta --- */
metadeQuantidadeCartas = quantidadeCartas / 2;
for(let j=0; j<metadeQuantidadeCartas; j++){
    valorDasCartas [j] = j;
}


// /* --- Sincroniza cada carta com seu respectivo valor --- */
// function identificarCartaClicada(divFilha){
//     if(identificarCarta === nomeCartas[0]){console.log(valorDasCartas[0]); arrayCartasClicadas.push(valorDasCartas[0])}
//     if(identificarCarta === nomeCartas[1]){console.log(valorDasCartas[1]); arrayCartasClicadas.push(valorDasCartas[1])}

//     // if(identificarCarta === nomeCartas[0]|| identificarCarta === nomeCartas[1] ){divFilha[0].innerHTML = `<p>${valorDasCartas[0]}</p>`; console.log(valorDasCartas[0])}
//     // if(identificarCarta === nomeCartas[2] || identificarCarta === nomeCartas[3] ){divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[1]}" alt="Papagaio"/>`}
//     // if(identificarCarta === nomeCartas[4] || identificarCarta === nomeCartas[5] ){divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[2]}" alt="Papagaio"/>`}
//     // if(identificarCarta === nomeCartas[6] || identificarCarta === nomeCartas[7] ){divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[3]}" alt="Papagaio"/>`}
//     // if(identificarCarta === nomeCartas[8] || identificarCarta === nomeCartas[9] ){divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[4]}" alt="Papagaio"/>`}
//     // if(identificarCarta === nomeCartas[10] || identificarCarta === nomeCartas[11] ){divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[5]}" alt="Papagaio"/>`}
//     // if(identificarCarta === nomeCartas[12] || identificarCarta === nomeCartas[13] ) {divFilha[0].innerHTML = `<img src="Imagens/${valorDasCartas[6]}" alt="Papagaio"/>`}
// }



// cartas.sort(comparador); // Embaralha as cartas do array


function comparador() { 
	return Math.random() - 0.5; 
}



// CÓDIGO FUNCIONA A PARTIR DAQUI SE NÃO OS 
// NUMERO NÃO SERÃO IGUAIS



let identificarCarta = null;
let contadorDeClicks = 0;


// Vira duas cartas 
function changeImg(divPai, id) {
    identificarCarta = id;
    contadorDeClicks += 1;
    console.log("numero de clicks"+contadorDeClicks);

    const divFilha = divPai.children
    // identificarCartaClicada(divFilha);
    /* --- o clique vira apenas 2 cartas ---- */
    if(contadorDeClicks === 2){
        divFilha[0].classList.add("virar-carta");
        setTimeout(desvirarTodasAsCartas, 1000);
        
    }else if(contadorDeClicks < 2){
        
        divFilha[0].classList.add("virar-carta");
    }

    console.log(arrayCartasClicadas)
}




// Desvira todas as cartas
function desvirarTodasAsCartas(){
    let elemento = document.querySelectorAll(".face");
    for(let j=0; j<elemento.length; j++){
        elemento[j].classList.remove('virar-carta');
        // elemento[j].innerHTML =`<img src="Imagens/front.png" alt="Papagaio"/> `
    }
    contadorDeClicks = 0;
    arrayCartasClicadas = []; // Recomeça o array;
}


function verificarIgualdade(){
}

// function changeImg (divPai, id){
//     identificarCarta = id; //passar o nome a ser comparado na função atribuirNumeroACarta();
//     // contarCartasCertas()

//     const divFilha = divPai.children; // console.log(divFilha[0]); // Div da carta

//     divFilha[0].classList.add("virar-carta");
//     if(divFilha[0].classList.contains("virar-carta")){
//         // Carta Virada
//         // atribuirNumeroACarta(divFilha);
//         contadorDeClicks += 1;
//     }
//     // else{
//     //     // Carta Desvirada

//     //     divFilha[0].innerHTML =`
//     //    <img src="Imagens/front.png" alt="Papagaio"/>
//     //     `
//     //     contadorDeClicks -= 1;
//     // }
//     if(contadorDeClicks === 2){
 
//         setTimeout(desvirarTodasAsCartas, 1000);
//     }
//     console.log(contadorDeClicks);
// } 

// function atribuirNumeroACarta(divEscolhida){

//     if(identificarCarta === nomeCartas[0]|| identificarCarta === nomeCartas[1] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[0]}" alt="Papagaio"/>`}
//     if(identificarCarta === nomeCartas[2] || identificarCarta === nomeCartas[3] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[1]}" alt="Papagaio"/>` }
//     if(identificarCarta === nomeCartas[4] || identificarCarta === nomeCartas[5] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[2]}" alt="Papagaio"/>` }
//     if(identificarCarta === nomeCartas[6] || identificarCarta === nomeCartas[7] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[3]}" alt="Papagaio"/>` }
//     if(identificarCarta === nomeCartas[8] || identificarCarta === nomeCartas[9] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[4]}" alt="Papagaio"/>` }
//     if(identificarCarta === nomeCartas[10] || identificarCarta === nomeCartas[11] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[5]}" alt="Papagaio"/>` }
//     if(identificarCarta === nomeCartas[12] || identificarCarta === nomeCartas[13] ){ divEscolhida[0].innerHTML = `<img src="Imagens/${gifs[6]}" alt="Papagaio"/>` }
// }

// const cartasClicadas = [];
// function contarCartasCertas(){
//     console.log(identificarCarta);
//     cartasClicadas.push(identificarCarta);
//     if( identificarCarta === cartas[0]|| identificarCarta === cartas[1])

//     console.log(cartasClicadas);}