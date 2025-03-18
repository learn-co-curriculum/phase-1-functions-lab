function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Absolute value ensures distance is always positive
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Reuse the blocks function
    return blocks * 264; // Convert blocks to feet
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Absolute value ensures positive distance
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Reuse the feet function

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // No rides over 2500 feet
    }
}