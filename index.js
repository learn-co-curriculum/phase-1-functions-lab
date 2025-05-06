function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(feetToHQ) {
    return distanceFromHqInBlocks(feetToHQ) * 264;
}