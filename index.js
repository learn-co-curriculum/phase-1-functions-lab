// Sets hq to 43.
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

// this is taking 1 block = 264 feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// takes starting block and Destination block and multiplies the distance by 264
function distanceTravelledInFeet() {
    const start = arguments[0];
    const destination = arguments[1];
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice() {
    const start = arguments[0];
    const destination = arguments[1];
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }};