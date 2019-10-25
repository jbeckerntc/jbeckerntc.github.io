//Placar 
let placarPorco = 0;
let placarVaca = 0; 

function mostraPlacar(){
 
 
  textSize(32);
  fill("yellow")
  text(placarPorco, 320, 28);
  fill("green")
  text(placarVaca, 290 , 28);
    
     if (yPorco  <= 10){
  
    placarPorco += 1;
    ponto.play();
    yPorco = 368;
    
  }

       if (yVaca  <= 10){
  
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
    
  }
}