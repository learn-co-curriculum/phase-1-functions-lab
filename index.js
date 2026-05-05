function distanceFromHqInBlocks (pickupBlock){
    return Math.abs (pickupBlock - 42);
}

function distanceFromHqInFeet (pickupBlock){
    const blocks = distanceFromHqInBlocks(pickupBlock);
    return blocks * 264;
}

function distanceTravelledInFeet (start, destination){
    const blocks = Math.abs(start - destination)
    return blocks * 264
}

function calculatesFarePrice (start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500) { return 'cannot travel that far'; }
    else if (distance > 2000) { return 25; }
    else if (distance > 400) { return (distance - 400) * 0.02; }
    else { return 0; }
}
