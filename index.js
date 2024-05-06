// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    if (num1 > 42) {
      return num1 - 42;
    } else {
      return 42 - num1;
    }  
  };

  function distanceFromHqInFeet(num) {
    let feet = distanceFromHqInBlocks(num);
      return feet * 264;
  };
  
  function distanceTravelledInFeet(start, destination) {
    let block;
    if (start > destination) {
      block = start - destination;
    } else {
      block = destination - start;
    } return block * 264;
  }

  function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination);
    let distanceAfterFreeRide = fare - 400;
    if (distanceAfterFreeRide <= 0) {
      return 0; 
    } else if (distanceAfterFreeRide < 1600) {
      return distanceAfterFreeRide * 0.02; 
    } else if (distanceAfterFreeRide >= 1600 && distanceAfterFreeRide <= 2100) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    } 
  }
  
  
