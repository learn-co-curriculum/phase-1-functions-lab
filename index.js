// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    return Math.abs(42 - pickupLocation);
  }


function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
      
}


  function distanceTravelledInFeet(feet1, feet2) {
    //returns the number of feet traveled
      return Math.abs(feet1 - feet2) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
      let distanceInFeet = distanceTravelledInFeet(start, destination);
      let fare;
      if (distanceInFeet < 400)
      {
          fare = 0;
          return fare;
      }
      else if (distanceInFeet >= 400 && distanceInFeet <= 2000)
      {
          fare = (distanceInFeet - 400) = 0.2;
          return fare;
      }
      else if (distanceInFeet >= 400 && distanceInFeet >= 2500)
      {
          fare = 25;
          return fare;
      }
      else if (distanceInFeet > 2500)
      {
          fare = "cannot travel that far";
          return fare;
      }
      return fare;
  }