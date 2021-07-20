function distanceFromHqInBlocks(num){
    return Math.abs(42-num);
}

function distanceFromHqInFeet(num){
    return Math.abs((42-num)*264);
}

function distanceTravelledInFeet(num1, num2){
    return Math.abs((num1-num2)*264);
}

function calculatesFarePrice(start, destination){
    let totalFeet = Math.abs(destination - start) * 264;
    if(Math.abs(destination - start) == 1 ){
        return 0;
    }
    else if( totalFeet > 400 && totalFeet < 2000){
        return (totalFeet - 400) * 0.02;
    }
    else if(totalFeet > 2000 && totalFeet < 2500){
        return 25;
    }
    else if (totalFeet > 2500){
        return 'cannot travel that far';
    }
}