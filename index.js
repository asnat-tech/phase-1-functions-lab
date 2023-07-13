function distanceFromHqInBlocks(blockNumber)
{
   if (blockNumber > 42){
    return(blockNumber -42)}
else {return(42-blockNumber)}
}

 function distanceFromHqInFeet(blockNumber){
  if (blockNumber > 42)
    return(blockNumber -42)*264
    else return(42-blockNumber)*264
}

function distanceTravelledInFeet(start,destination){
if (destination>start)
return (destination-start)*264
else return(start-destination)*264}

function calculatesFarePrice(start, destination){
let distance =distanceTravelledInFeet
(start,destination)
if (distance<=400)
return 0

}
if(distance>400 && distance<=2000){
  return (distance-400)* 0.02;

}
else if(distance>=2000&& distance<=2500){
  return 25;
}
else if (distance>2500){
  return "cannot travel that far"
}



  










