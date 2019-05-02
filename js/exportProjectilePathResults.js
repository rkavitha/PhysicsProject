
const ACC_GRAVITY = -9.81;

function exportSampleData() {
    var rows = [];
    var row1 = {"Name" : "Alex", "Age" :"10"};
    var row2 = {"Name" : "Barb", "Age" :"11"};
    rows.push(row1);
    rows.push(row2);
    exportToExcel(rows);
}

function downloadAllSelections() {
    if(projectilePathSelResults.length > 0) {
        exportToExcel(projectilePathSelResults);    
    }
    
}
function downloadAllWithConstAngle() {
    const angleDegrees = 40;
    var angleRadians = getAngleRadians(angleDegrees);
    
    var results=[];
    for (var i = 0; i<=90; i= i + 5) {
        var initialVelocity = i;
        var initialVelocityX = getInitialVelocityX(initialVelocity, angleRadians);
        var initialVelocityY = getInitialVelocityY(initialVelocity, angleRadians);
        var timeToReachMaxHeight = getTimeToReachMaxHeight(initialVelocityY);
        var maxHeight = getMaxHeight(initialVelocityY, timeToReachMaxHeight);
        var totalTime = getTotalTime(timeToReachMaxHeight);
        var totalHorizontalDistance = getTotalHorizontalDistance(initialVelocityX, totalTime);
        var result=getResultforExport(initialVelocity, angleDegrees, angleRadians, initialVelocityX, initialVelocityY,                                                  timeToReachMaxHeight, maxHeight, totalTime, totalHorizontalDistance);
        results.push(result);
       
    }
    exportToExcel(results);
}

function downloadAllWithConstVelocity() {
    const initialVelocity = 40;
    
    var results=[];
    for (var i = 0; i<=90; i= i + 5) {
        var angleDegrees = i;
        var angleRadians = getAngleRadians(angleDegrees);
        var initialVelocityX = getInitialVelocityX(initialVelocity, angleRadians);
        var initialVelocityY = getInitialVelocityY(initialVelocity, angleRadians); 
        var timeToReachMaxHeight = getTimeToReachMaxHeight(initialVelocityY);
        var maxHeight = getMaxHeight(initialVelocityY, timeToReachMaxHeight);
        var totalTime = getTotalTime(timeToReachMaxHeight);
        var totalHorizontalDistance = getTotalHorizontalDistance(initialVelocityX, totalTime);
        var result=getResultforExport(initialVelocity, angleDegrees, angleRadians, initialVelocityX, initialVelocityY,                                                  timeToReachMaxHeight, maxHeight, totalTime, totalHorizontalDistance);
        results.push(result);
       
    }
    exportToExcel(results);
} 

function getInitialVelocityX(initialVelocity, angleRadians){
     var initialVelocityX = initialVelocity * Math.cos(angleRadians);
     initialVelocityX = initialVelocityX.toFixed(2);
     return initialVelocityX;
}

function getInitialVelocityY(initialVelocity, angleRadians){
    var initialVelocityY = initialVelocity * Math.sin(angleRadians);
    initialVelocityY = initialVelocityY.toFixed(2);
    return initialVelocityY;
}

function getTimeToReachMaxHeight(initialVelocityY) {
	var timeToReachMaxHeight = (-initialVelocityY/ACC_GRAVITY);
    timeToReachMaxHeight = timeToReachMaxHeight.toFixed(2);
    return timeToReachMaxHeight;    
}

function getAngleRadians(angleDegrees) {
    angleDegrees = Number(angleDegrees);
    var angleRadians = 0;
    if (angleDegrees > 0){
        angleRadians = angleDegrees * (Math.PI/180);
    }
    angleRadians = angleRadians.toFixed(2);
    return angleRadians;
}

function getMaxHeight(initialVelocityY, timeToReachMaxHeight){
    var maxHeight = (initialVelocityY * timeToReachMaxHeight) + (1/2 * ACC_GRAVITY * timeToReachMaxHeight * timeToReachMaxHeight);
    maxHeight = maxHeight.toFixed(2);
    return maxHeight;
}

function getTotalTime(timeToReachMaxHeight) {
    var totalTime = (2 * timeToReachMaxHeight);
    totalTime = totalTime.toFixed(2);
    return totalTime;
}

function getTotalHorizontalDistance(initialVelocityX, totalTime) {
    var totalHorizontalDistance = (initialVelocityX * totalTime);
    totalHorizontalDistance = totalHorizontalDistance.toFixed(2);
    return totalHorizontalDistance;
}

function getResultforExport(initialVelocity, angleDegrees, angleRadians, initialVelocityX, initialVelocityY,timeToReachMaxHeight, maxHeight, totalTime, totalHorizontalDistance) {
    var result = {"InitialVelocity" : initialVelocity,
                 "AngleDegrees" : angleDegrees,
                 "AngleRadians" : angleRadians,
                 "InitialVelocityX" : initialVelocityX,
                 "InitialVelocityY" : initialVelocityY,
                 "TimeToReachMaxHeight" : timeToReachMaxHeight,
                 "MaxHeight" : maxHeight,
                 "TotalTime" : totalTime,
                 "TotalHorizontalDistance" : totalHorizontalDistance,
                 };
    return result;
}





function exportToExcel(data) {
    $("#dvjson").excelexportjs({
        containerid: "dvjson",
        datatype: "json",
        dataset: data,
        columns: getColumns(data)
    });
}


    
