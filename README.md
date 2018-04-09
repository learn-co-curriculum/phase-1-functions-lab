# Functions Lab

## Objectives

1. Practice writing functions
2. Explain calling functions from within other functions
2. Practice basics of control flow and `return` statements

## Introduction

Scuber has gained some traction among moms and dads in New York City. It has
also received a few requests.

First, Scuber's executives want to ensure that Scuber's headquarters is near
its customers. They ask you to write a function that takes in a pickup location
for a passenger, and returns the number of blocks from it's headquarters on
42nd street. This can be used for another function that translates the number
of blocks from headquarters to the distance in feet.

Second, customers want Scuber to calculate the number of feet travelled based on
the distance. Write a function called `distanceTravelledInFeet` that takes in the
beginning and destination blocks and returns the number of feet travelled. Each
block in Manhattan is 264 feet long. For example `distanceTravelledInFeet(34, 38)`
representing 34th St to 38th St, returns 1056 (`(38-34)*264`). You can assume
that we are only calculating distance uptown/downtown, not from river to river.

## Instructions

If you run `learn` you will see the tests are currently breaking; you will need
to write these functions from scratch, and test them as you go to get them
working. It's easier to understand and solve the problem if you look
through the tests, which are located in `test/indexTest.js`. After the word
`describe`, you will see the name of the function that the test is testing, for
example the first function tested is `distanceFromHqInBlocks`. Then, after
the word `it`, you can see the specifications of the function. The test
literally calls the function that you write in `index.js`. So the first test
will call your declared function `distanceFromHqInBlocks` and pass through an
argument of `43`.

* `distanceFromHqInBlocks`: Returns the number of blocks from Scuber's
headquarters to the pickup location.

* `distanceFromHqInFeet`: Returns the number of feet from Scuber's
headquarters to the pickup location. Note that you can use your
`distanceFromHqInBlocks` function to help return the correct value here. Here
is an example of how to do this:

```js
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
```

* `distanceTravelledInFeet`: Calculates the number of feet a passenger travels
given a starting block and an ending block - it only calculates distance North
and South (uptown/downtown). It uses the knowledge that a block is 264 feet
long.

* `calculatesFarePrice`: Given the same starting and ending block as the
previous test (_hint hint_), return the fare for the customer. The first four
hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
cents per foot (not including 400, which are free!). Then Scuber charges a
flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
does not allow any rides over 2500 feet - the function returns `'cannot travel
that far'` if a ride over 2500 feet is requested.

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-functions-lab'>Functions Lab</a> on Learn.co and start learning to code for free.</p>
