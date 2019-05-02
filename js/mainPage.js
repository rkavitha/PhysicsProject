var gr;
 
function initializeVariables() {
    gr = new jsGraphics(document.getElementById("canvasDiv"));
}

/** 
 *  Get the angleRange element. Then get its value and store it in variable angleRangeValue
 *  Get the angleLabel element. Then set its value to be equal to angleRangeValue
 */
function setAngleValue() {
    
    var angleRangeElem = document.getElementById("angleRange");
    var angleRangeValue = angleRangeElem.value;
    
    var angleLabelElem= document.getElementById("angleLabel");
    angleLabelElem.innerHTML = "Angle(in degrees): " + angleRangeValue;
}

function setVelocityValue() {
    var velocityRangeElem = document.getElementById("velocityRange");
    var velocityRangeValue = velocityRangeElem.value;
    
    var initialVelocityLabelElem= document.getElementById("initialVelocityLabel");
    initialVelocityLabelElem.innerHTML = "Initial Velocity(m/s): " + velocityRangeValue;
}

function reset() {
    gr.clear();
    window.location.reload();
    //resetAngle();
    //resetVelocity();
    //resetMass();
    //resetResults();
}

function resetAngle() {
    var angleRangeElem = document.getElementById("angleRange");
    angleRangeElem.value = 0;
    
    var angleLabelElem= document.getElementById("angleLabel");
    angleLabelElem.innerHTML = "Angle(in degrees): 0";
}

function resetVelocity() {
    var velocityRangeElem = document.getElementById("velocityRange");
    velocityRangeElem.value = 0;
    
    var initialVelocityLabelElem= document.getElementById("initialVelocityLabel");
    initialVelocityLabelElem.innerHTML = "Initial Velocity(m/s): 0";
}

function resetMass() {
    var massElem = document.getElementById("massCheckbox");
    massElem.checked = false;
}

function resetResults() {
    var timeTakentoReachMaxHeightElem = document.getElementById("timetakentoreachMaxHeightLabel");
    timeTakentoReachMaxHeightElem.innerHTML = "0 sec";
    
    var maxHeightElem = document.getElementById("maxHeightLabel");
    maxHeightElem.innerHTML = "0 m";
    
    var totalTimeElem = document.getElementById("totalTimeLabel");
    totalTimeElem.innerHTML = "0 sec";
    
    var totalHorizontalDistanceElem = document.getElementById("totalHorizontalDistanceLabel");
    totalHorizontalDistanceElem.innerHTML = "0 m";
    
}