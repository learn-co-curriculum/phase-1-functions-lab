# Functions Lab

## Objectives
1. Practice writing functions
2. Explain calling functions from within other functions
2. Practice basics of control flow and `return` statements

## Introduction
Scuber has gained some traction among mom's and dad's in New York City. It also has received a few requests.

First, Scuber's CTO wants to ensure that its headquarters is near its customers. It asks you to write a function that takes in a pickup location for a passenger, and returns the number of blocks from it's headquarters on 42nd street. This can be used for another function that translates the number of blocks from headquarters to the distance in feet.

Second, customers want Scuber to calculate the number of feet traveled based on the distance. Write a function called `calculateVertical` that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example `calculateVertical(34, 38)` returns 1056 (`(38-34)*264`). You can assume that we are only calculating vertical distance from headquarters. So the functions won't return a different distance from 45th street and Lexington Avenue and 45th street and Broadway - it's only calculating the vertical distance.

## Instructions
If you run `learn` you will see the tests that are breaking and that you will be working to fix. It's easier to understand and solve the problem if you look through the tests, which are located in `test/indexTest.js`. After the word `describe`, you will see the name of the function that the test is testing, for example the first function tested is `distanceFromHqInBlocks`. Then in after the word `it` you can see the specifications of the function. The test literally calls the function that you write in `index.js`. So the first test will call your declared function `distanceFromHqInBlocks` and pass through an argument of `43`.

* `distanceFromHqInBlocks`: Returns the number of blocks from Scuber's headquarters to the pickup location.

* `distanceFromHqInFeet`: Returns the number of blocks from Scuber's headquarters to the pickup location. Note that you can use your `distanceFromHqInBlocks` function to help return the correct value here. Here is an example of how to do this:

```js
function distanceFromHqInBlocks () {

}

function distanceFromHqInFeet () {
  distanceFromHqInBlocks();
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}
```

* `distanceTravelledInFeet`: Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South. It uses the knowledge that a block is 264 feet long.

* `calculatesFarePrice`: Given the same starting and ending block, return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot. Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally Scuber does not allow any rides over 2500 feet - the function returns `'cannot travel that far'` if a ride over 2500 feet is requested.

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-functions-lab'>Functions Lab</a> on Learn.co and start learning to code for free.</p>
