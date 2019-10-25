let atropelaVaca = false;
let atropelaPorco = false;

function atropelamento(){

  for(let i=0; i<imgCarro.length; i++){
  
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50, 30);
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 368;
      atropelou.play();
      if(placarVaca >0){
        placarVaca -= 1; 
        }
    }
    
    
    atropelaPorco = collideRectRect(xPorco, yPorco, 28, 28, xCarro[i], yCarro[i], 50, 30)
    if(atropelaPorco){
      //Porco atropelado
      yPorco = 368;
      atropelou.play();
      if(placarPorco > 0){
        placarPorco -= 1;
        
      }
    }
    
  }//for
}//função



