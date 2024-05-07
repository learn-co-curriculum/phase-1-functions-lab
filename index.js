// Code your solution in this file!


function distanceFromHqInBlocks(street){
    const hqBlock = 42;
    return Math.abs(street - hqBlock);
}


function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264; 
}
  
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return ((distanceInFeet - 400) * 0.02); 
    } else if ((distanceInFeet - 400) <= 2000) {
        return 25;
    } else if (distanceInFeet > 2500) {
        return "cannot travel that far";
    }
}
