JavaScript Intro to Functions Lab
---

## Objectives

1. Practice writing functions
2. Explain basics of working with strings
3. Explain the difference between `return` and logging
4. Practice using `return` and `console.log()`

## Introduction
Scuber has gained some traction among mom's and dad's in New York City.  It also has received a few requests.  

First, Scuber's CTO wants to ensure that its headquarters is near its customers.  It asks you to write a function that takes in a pickup location for a passenger, and returns the number of blocks from it's headquarters on 42nd street.  This can be used for another function that translates the number of blocks from headquarters to the distance in feet.

Second, customers want Scuber to calculate the number of feet traveled based on the distance.  Scuber is compromising.  Write a function called `calculateVertical` that takes in the beginning and destination blocks and returns the number of feet travelled.  Each block in Manhattan is 264 feet long. For example `calculateVertical(34, 38)` returns 1056 (`(38-34)*4`).

## Instructions
There are four functions you need to fill in.

* distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.

* distanceFromHqInFeet: Returns the number of blocks from Scuber's headquarters to the pickup location.  Note that you can use your `distanceFromHqInBlocks` function to help return the correct value here.  Here is an example of how to do this:

```javascript
function distanceFromHqInBlocks(){

}

function distanceFromHqInFeet(){
  distanceFromHqInBlocks()
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}
```

* distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South.  It uses the knowledge that a block is 264 feet long.

* calculatesFarePrice: Given the same starting and ending block, return the fare for the customer.  The first four hundred feet are free, then Scuber charges a flat fare for a distance over 2000 feet, finally Scuber does not allow any rides over 2500 feet.  For a distance between 400 and 2000 feet, the price is 2 cents per foot.
