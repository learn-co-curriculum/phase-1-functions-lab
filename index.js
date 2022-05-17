function distanceFromHqInBlocks(customer) {
    return Math.abs(customer-42)
}

function distanceFromHqInFeet(customer) {
    return distanceFromHqInBlocks(customer) * 264
}
