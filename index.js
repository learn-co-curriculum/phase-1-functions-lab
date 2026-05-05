function distanceFromHqInBlocks(currentBlock) {
  const hqStreet = 42;
  let distance = Math.abs(hqStreet - currentBlock);

  return distance;
}
function distanceFromHqInFeet(currentBlock) {
  return distanceFromHqInBlocks(currentBlock) * 264;
}
function distanceTravelledInFeet(origin, destination) {
  return Math.abs(origin - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
