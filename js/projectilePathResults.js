var angleRadians = 0;
var angleDegrees = 0;
var initialVelocity = 0;
var initialVelocityX = 0;
var initialVelocityY = 0;
const GRAVITY = -9.81;
var timeToReachMaxHeight = 0;
var initialHeight = 0;
var maxHeight = 0;
var totalTime = 0;
var totalHorizontalDistance = 0;
var initialHorizontalDistance = 0;
var projectilePathSelResults = [];

function calculateResults() {
    calculateAngleRadians();
    calculateInitialVelocityX();
    calculateInitialVelocityY();
    calculateTimeForMaxHeight();
    calculateMaxHeight();
    calculateTotalTime();
    calculatetotalHorizontalDistance();
    saveResultsForExport();
}

/* Get the element degrees range 
 * Get the element's value and store it to a variable (angleDegrees)
 * Covert the degrees to Radians
 */
function calculateAngleRadians() {
    var angleRangeElem = document.getElementById("angleRange");
    angleDegrees = angleRangeElem.value;
    angleDegrees = Number(angleDegrees);
    if (angleDegrees > 0) {
        angleRadians = angleDegrees * (Math.PI/180);
    }
} 

/* Get the Html element range for velocity
 * Get the element's value and store it to a variable
 * Then calculcate initialVelocityX from the initialVelocity
 */
function calculateInitialVelocityX() {
    var initialVelocityElem = document.getElementById("velocityRange");
    initialVelocity = initialVelocityElem.value;
    initialVelocityX = initialVelocity * Math.cos(angleRadians);
}

function calculateInitialVelocityY() {
    var initialVelocityElem = document.getElementById("velocityRange");
    initialVelocity = initialVelocityElem.value;
    initialVelocityY = initialVelocity * Math.sin(angleRadians);
}

function calculateTimeForMaxHeight() {
    timeToReachMaxHeight = -initialVelocityY/GRAVITY;
    timeToReachMaxHeight = Number(timeToReachMaxHeight.toFixed(2));
    var timeToReachMaxHeightElem = document.getElementById("timetakentoreachMaxHeightLabel");
    timeToReachMaxHeightElem.innerHTML = timeToReachMaxHeight;
    //alert("timetoReachMaxHeight:" + timeToReachMaxHeight);
} 

function calculateMaxHeight() {
    maxHeight = initialHeight + (initialVelocityY  * timeToReachMaxHeight) + (1/2 * GRAVITY * timeToReachMaxHeight * timeToReachMaxHeight);
    maxHeight = Number(maxHeight.toFixed(2));
    var maxHeightElem = document.getElementById("maxHeightLabel");
    maxHeightElem.innerHTML = maxHeight;
    //alert("maxHeight:" + maxHeight);
}

function calculateTotalTime()  {
    totalTime = timeToReachMaxHeight * 2;
    totalTime = Number(totalTime.toFixed(2));
    var totalTimeElem = document.getElementById("totalTimeLabel");
    totalTimeElem.innerHTML = totalTime;
    //alert("totalTime:" + totalTime);
}

function calculatetotalHorizontalDistance()  {
    totalHorizontalDistance = initialHorizontalDistance + (initialVelocityX * totalTime);
    totalHorizontalDistance = Number(totalHorizontalDistance.toFixed(2));
    var totalHorizontalDistanceElem = document.getElementById("totalHorizontalDistanceLabel");
    totalHorizontalDistanceElem.innerHTML = totalHorizontalDistance;
    //alert("totalHorizontalDistance:" + totalHorizontalDistance);
}

function saveResultsForExport() {
    var resultsObj = {"Initial Velocity" :initialVelocity, 
                      "AngleDegrees": angleDegrees,
                      "AngleRadians": angleRadians.toFixed(2),
                      "Initial VelocityX": initialVelocityX.toFixed(2),
                      "Initial VelocityY": initialVelocityY.toFixed(2),
                      "Time To Reach Max Height": timeToReachMaxHeight,
                      "Max Height": maxHeight,
                      "Total Time": totalTime,
                      "Total Horizontal Distance": totalHorizontalDistance
                     };
    
    projectilePathSelResults.push(resultsObj);
                     
}