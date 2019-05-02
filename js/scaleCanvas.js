/** Properties related to the Scale drawn on the X and Y axis of the Canvas object */
const SCALE_GRAPH_EVERY = 100;
const SCALE_WIDTH = 4;
const SCALE_HEIGHT = 8;


function scaleGraphXAxis() {
    var numScaleOnXAxis = Math.round(MAX_HORIZONTAL_DISTANCE / SCALE_GRAPH_EVERY);
    console.log("numScaleOnXAxis: " + numScaleOnXAxis);
    
    var redPen=new jsPen(new jsColor(LINE_COLOR), LINE_THICKNESS);
    
    var scaleXPos = LINE_START_X_POS;
    var scaleHorizontal = Math.round((SCALE_GRAPH_EVERY/MAX_HORIZONTAL_DISTANCE) * canvas.width); 
    for (var i = 0; i < numScaleOnXAxis; i++) {
        var point = new jsPoint(scaleXPos, LINE_START_Y_POS);
        gr.drawRectangle(redPen, point, SCALE_WIDTH, SCALE_HEIGHT);
        scaleXPos += scaleHorizontal;      
    }
}

function scaleGraphYAxis() {
    var numScaleOnYAxis = Math.round(MAX_HEIGHT / SCALE_GRAPH_EVERY) + 1;
    console.log("numScaleOnYAxis: " + numScaleOnYAxis);
    
    var redPen=new jsPen(new jsColor(LINE_COLOR), LINE_THICKNESS);
    
    var scaleYPos = canvas.height;
    var scaleVertical = Math.round((SCALE_GRAPH_EVERY/MAX_HEIGHT) * canvas.height);
    for (var i = 0; i < numScaleOnYAxis; i++) {
        var point = new jsPoint(LINE_START_X_POS, scaleYPos);
        gr.drawRectangle(redPen, point, SCALE_WIDTH, SCALE_HEIGHT);
        scaleYPos -= scaleVertical;
    }
}
