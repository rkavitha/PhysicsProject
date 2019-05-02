const MAX_HORIZONTAL_DISTANCE = 880;
const MAX_HEIGHT = 420;

/** Properties used when drawing the projectile path */
const LINE_COLOR = "rgb(255, 26, 26)";
const LINE_THICKNESS = 2;
const Y_POS_OFFSET = 20;

/** Properties used when drawing the projectile path info as text next to the projectile path */
const DEGREE_SYMBOL = "&deg";
const FONT_FAMILY ="Impact"; 
const FONT_WEIGHT ="normal"; 
const FONT_SIZE ="small";
const ALIGN = "left";

var maxXPos = 0;
var midXPos = 0;
var maxYPos = 0;


function launchProjectile() {
    calculateResults();
    drawPath();
    drawPathInfo();
}


function drawPath() {
   var bluePen=new jsPen(new jsColor(LINE_COLOR), LINE_THICKNESS);
   calculateMaxXPos();
   calculateMidXPos();
   calculateMaxYPos();
    
   var point1 = new jsPoint(0,canvas.height);
   var point2 = new jsPoint(midXPos,maxYPos);
   var point3 = new jsPoint(maxXPos,canvas.height);
   
   var curvePoints=new Array(point1,point2,point3);
   
   gr.setOrigin(new jsPoint(0,0));
   gr.drawCurve(bluePen,curvePoints);
}

function calculateMaxXPos() {
    maxXPos = (totalHorizontalDistance/MAX_HORIZONTAL_DISTANCE) * canvas.width;
    maxXPos = Math.round(maxXPos);
}

function calculateMidXPos() {
    midXPos = maxXPos/2;
    midXPos = Math.round(midXPos);
}

function calculateMaxYPos() {
    maxYPos = canvas.height - (maxHeight/MAX_HEIGHT * canvas.height);
	maxYPos = Math.round(maxYPos);
}

function getPathInfo() {
    var pathInfo = angleDegrees + DEGREE_SYMBOL + ",  " + initialVelocity + " m/s --> Ht: " + maxHeight + " R: " + totalHorizontalDistance +", T: " + totalTime;
    
    return pathInfo;
    
}

function drawPathInfo() {
    var textFont = new jsFont(FONT_FAMILY,FONT_WEIGHT,FONT_SIZE,ALIGN);
    var pathInfo = getPathInfo();
    var xPos = Math.round(midXPos/2);
    var yPos = Math.round(maxYPos - Y_POS_OFFSET);
    var textPoint = new jsPoint(xPos,yPos);
    gr.drawText(pathInfo,textPoint,textFont);
}