function distanceFromHqInBlocks(int){
    return Math.abs(42 - int);
};

function distanceFromHqInFeet(int){
    return (Math.abs(42-int)*264);
};

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination-start)*264); 
};

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    }
    else if (distance >= 400 && distance < 2000){
        return .02 * (distance - 400);
    }
    else if (distance >= 2000 && distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}