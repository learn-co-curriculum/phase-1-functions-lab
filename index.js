function distanceFromHqInBlocks(streetNum) {
    if (streetNum > 42) { 
        return streetNum - 42;
    } else {
        return 42 - streetNum;
    }
}

function distanceFromHqInFeet(streetNum) {
    return distanceFromHqInBlocks(streetNum) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return (0);
}
    else if (distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance <= 2500) {
        return (25)
    }
    else {
        return ('cannot travel that far');
    }
}