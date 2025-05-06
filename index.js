// Distance from HQ in Blocks

function distanceFromHqInBlocks(blockNum) {
  if (blockNum >= 42) {
    return blockNum - 42;
  } else {
    return 42 - blockNum;
  }
}

distanceFromHqInBlocks();

// Distance from HQ in Feet

function distanceFromHqInFeet(start) {
  return Math.abs(start - 42) * 264;
}

distanceFromHqInFeet();

//Distance Travelled in Feet

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

distanceTravelledInFeet();

//Calculate Fare Price

function calculatesFarePrice(start, destination) {
  const result = Math.abs(start - destination) * 264;
  if (result <= 400) {
    return 0;
  } else if (result <= 2000) {
    return Math.abs(result - 400) * 0.02;
  } else if (result <= 2500) {
    return 25;
  } else return "cannot travel that far";
}
calculatesFarePrice();
