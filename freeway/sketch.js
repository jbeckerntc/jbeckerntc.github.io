function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){
      if(placarVaca < 5 && placarPorco < 5)
        jogar();
      else
        verificaVencedor();
    
  }else{
  //tela inicial
    telaInicial();
  }
}

function porcoVencedor(){
  background("DarkRed");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("white");
  textSize(48);
  text("Porco Venceu !!", 300, 90);
  textSize(24);
  text("Parabéns ao Vencedor", 300, 350);
  image(imgPorco, 200, 100, 200, 200)
}


function vacaVencedora(){
  
  background("crimson");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("white");
  textSize(48);
  text("Vaca Venceu!!", 300, 90);
  textSize(24);
  text("Parabéns ao Vencedor", 300, 350);
  image(imgVaca, 200, 100, 200, 200)
}


function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora();
  else
    porcoVencedor();
    
}


function telaInicial(){
  background("violet");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("white");
  textSize(48);
  text(" Jogo da Av. 1° de Maio", 300, 200);
  textSize(24);
  text("Desenvolvido por jBeckerNTC", 300, 250);
  
}


function jogar(){
  background(imgEstrada);
  movimentaVacas();
  mostraCarros();
  mostraVacas();
  movimentaCarros();
  mostraPlacar();
  atropelamento()
}