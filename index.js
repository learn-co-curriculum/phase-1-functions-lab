//Code your solution in this file!
functions // Code your solution in this file!


// Code your solution in this file!

function distanceFromHqInBlocks(block){
  return Math.abs(block-42)
  }
  
  function distanceFromHqInFeet(feet){
      return Math.abs((feet-42) * 264)
  }
  
  function distanceTravelledInFeet(start,destination){
      const lengthInBlock  = Math.abs(start - destination);
      //264 = the value of feet
      return lengthInBlock * 264;
  }
  
  function calculatesFarePrice(start,destination){
  
      const distanceTravelled = distanceTravelledInFeet(start,destination)
  
      if(distanceTravelled <= 400){
          return 0;
      }else if(distanceTravelled > 400 && distanceTravelled <= 2000){
          return 2 *(distanceTravelled - 400)/100;
      }else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
          return 25;
      }else if(distanceTravelled > 2500){
          return 'cannot travel that far';
      }
  }