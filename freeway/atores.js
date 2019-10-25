function movimentaVacas(){
  if (keyIsDown(87)){
      if(yVaca > 5)
        yVaca -= 5;
  }
  
  if (keyIsDown(83)){
    if(yVaca < 366)
        yVaca += 5;
  }
  
 
   if (keyIsDown(UP_ARROW)) {
   if(yPorco > 5)
      yPorco -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(yPorco < 366)
       yPorco += 5;
  }
   

}

function mostraVacas(){
  image(imgPorco,xPorco, yPorco, larguraAnimais, alturaAnimais);
  image(imgVaca,xVaca, yVaca, larguraAnimais, alturaAnimais);
  
}
