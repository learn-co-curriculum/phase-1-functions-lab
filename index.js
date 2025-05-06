function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(feetToHQ) {
    return distanceFromHqInBlocks(feetToHQ) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(start, destination){
    const distance = Math.abs(start-destination)*264;

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400)* .02;
    } else if (distance > 2000 && distance <=2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}