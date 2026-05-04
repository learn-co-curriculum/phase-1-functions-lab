// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(42-street)
}
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(start-end) * 264
}
function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end); 
    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist <= 2000) {
        return (dist - 400) * 0.02
    } else if (dist > 2000 && dist <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}