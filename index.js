function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(42 - pickupLocation);
}
function distanceFromHqInFeet(feet) {
  return Math.abs(42 - feet) * 264;
}
function distance (start, destination) {
  return Math.abs(start - destination)
}
function distanceTravelledInFeet(start, destination) {
   const distanceInBlocks = distance(start, destination)
 return distanceInBlocks * 264;
}
function calculatesFarePrice(start, destination) {
  const travelDistance = distanceTravelledInFeet(start, destination)
  if (travelDistance <= 400) {  
    return 0;
  } else if (travelDistance <= 2000) {
    return (travelDistance - 400) * 0.02;
  } else if (travelDistance <= 2500) {
    return 25;
  } else { return 'cannot travel that far'
  }
};
  