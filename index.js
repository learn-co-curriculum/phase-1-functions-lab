// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqStreet = 42;
  if (pickupLocation > 42) {
    let distanceFromHqInBlocks = pickupLocation - hqStreet;
    return distanceFromHqInBlocks;
  } else {
    let distanceFromHqInBlocks = hqStreet - pickupLocation;
    return distanceFromHqInBlocks;
  }
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(value) {
  let distanceFromHqInFeet = distanceFromHqInBlocks(value) * 264;
  return distanceFromHqInFeet;
}

distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, end) {
  if (start > 42) {
    let distanceTravelledInFeet = (end - start) * 264;
    return distanceTravelledInFeet;
  } else {
    let distanceTravelledInFeet = (start - end) * 264;
    return distanceTravelledInFeet;
  }
}

function calculatesFarePrice(start,end){
    let charges;
    if (distanceTravelledInFeet(start,end)<=400){
        return 0;
    }else if(400<distanceTravelledInFeet(start,end)&&distanceTravelledInFeet(start,end)<2000){
        charges=(distanceTravelledInFeet(start,end)-400)*0.02;
        return charges;
    }else if (2000<distanceTravelledInFeet(start,end)&&distanceTravelledInFeet(start,end)<2500){
        charges =25;
        return charges;

    }else{ return "cannot travel that far";
    }
}

calculatesFarePrice(47, 59);
