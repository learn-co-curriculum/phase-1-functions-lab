const hqBlock = 42
const blockDistanceInFeet = 264

const distanceFromHqInBlocks = (blockNumber) => {
    return Math.abs(blockNumber - hqBlock)
}

const distanceFromHqInFeet = (blockNumber) => {
    return blockDistanceInFeet * distanceFromHqInBlocks(blockNumber)
}

const distanceTravelledInFeet = (start, end) => {
    return Math.abs(start - end) * blockDistanceInFeet
}

const calculatesFarePrice = (start, end) => {
    const distance = distanceTravelledInFeet(start, end)
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else {
        return 0.02 * Math.max(0, (distance - 400));
    }
}