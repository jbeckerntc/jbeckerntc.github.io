//Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgPorco;
let imgCarro = [];
let larguraCarro = 50;
let alturaCarro = 30;
let diametroCarro = larguraCarro / 2;

//Variaveis de movimento
let xVaca = 150;
let yVaca = 368;

let larguraAnimais = 28;
let alturaAnimais = 28;

let yPorco = 368;
let xPorco = 450;

//Vetores
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];




function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgPorco = loadImage('imagens/vaca2.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  //Sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
  

}
