
const hqLocation = 42;

function distanceFromHqInBlocks(someValue) {

  return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);

  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  
  return blocksTravelled * 264;
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25; 
  } else {
    fare = 'cannot travel that far'; 
  }

  return fare;
}

console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(34, 38)); 
console.log(calculatesFarePrice(34, 38)); 
