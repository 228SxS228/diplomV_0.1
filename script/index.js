// const ctx = document.getElementById("canvas").getContext("2d");

// function rectangle() {
//     let rectangle = new Path2D();
//     ctx.beginPath();
//     rectangle.rect(195, 50, 100, 100);
//     ctx.closePath();
//     ctx.stroke(rectangle);
// }

// rectangle();

// function ellipse() {
//     let ellipse = new Path2D();
//     ctx.beginPath();
//     ellipse.arc(260, 25, 20, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.stroke(ellipse);
// }

// ellipse();

// function text() {
//     ctx.font = "48px ";
//     ctx.fillText("Hello world", 10, 10);
// }

// text();

// function image() {
//     var img = new Image();
//     img.onload = function () {
//         ctx.drawImage(img, 40, 60);
//     };
//     img.src = "https://mdn.mozillademos.org/files/5395/backdrop.png";
// }

// // image()

// function tube() {
//     ctx.beginPath();
//     ctx.arc(100, 100, 30, 0, Math.PI);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(100, 60, 25, Math.PI * 2, 0);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(76, 56);
//     ctx.lineTo(70, 100);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(124, 55);
//     ctx.lineTo(130, 100);
//     ctx.stroke();
// }

// tube();

// function line() {
//     ctx.beginPath();
//     ctx.moveTo(20, 55);
//     ctx.lineTo(30, 150);
//     ctx.stroke();
// }

// line();

// function polyline() {
//     ctx.beginPath();
//     ctx.moveTo(40, 55);
//     ctx.lineTo(40, 150);
//     ctx.lineTo(120, 150);
//     ctx.lineTo(100, 90);
//     ctx.stroke();
// }

// polyline();

// function symbol() {
//     ctx.beginPath();
//     ctx.moveTo(75, 25);
//     ctx.quadraticCurveTo(25, 25, 25, 62.5);
//     ctx.quadraticCurveTo(25, 100, 50, 100);
//     ctx.quadraticCurveTo(50, 120, 30, 125);
//     ctx.quadraticCurveTo(60, 120, 65, 100);
//     ctx.quadraticCurveTo(125, 100, 125, 62.5);
//     ctx.quadraticCurveTo(125, 25, 75, 25);
//     ctx.stroke();
// }

// symbol();
