/**
 * canvas object is like a drawing board, where the objects like Circle etc are drawn.
 */
var canvas;
var ctx;

/**
 * 1. Calculate the monitor width and height
 * 2. Initialize the canvas element and set it's width and height
 */
function createCanvas() {
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    var docElem = document.documentElement;
    var htmlBody = document.getElementsByTagName('body')[0];
    var width = window.innerWidth || docElem.clientWidth || htmlBody.clientWidth;
    var height = window.innerHeight|| docElem.clientHeight|| htmlBody.clientHeight; 
    canvas.width = width * .7;
    canvas.height = height * .67;
    canvas.style.border = "solid";
    ctx = canvas.getContext("2d");
}


/**
 * Erase objects drawn from the Canvas
 */
function clearCanvas(x, y) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
}