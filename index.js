function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
  }
  
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
  }
  

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000){
        return [distanceTravelledInFeet(start, destination)-400] * .02 
    }
    else if (distanceTravelledInFeet(start, destination) < 2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }
  }





