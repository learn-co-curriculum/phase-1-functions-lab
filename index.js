function distanceFromHqInBlocks(pickup){
const numOfBlocks = Math.abs(pickup - 42)
return numOfBlocks
}
 


function distanceFromHqInFeet(feet){
  const numOfBlocks = distanceFromHqInBlocks(feet)
  const distanceInFeet = numOfBlocks * 264
 return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    
    const numOfFeet = (start - destination) * 264
    return Math.abs(numOfFeet)
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)

    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <=2000) {
        return (feet - 400) * .02;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    } else if (feet > 2000) {
        return 25;
    }
}