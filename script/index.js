const ctx = document.getElementById("canvas").getContext("2d");

// function rectangle() {

//     let rectangle = new Path2D();
//     rectangle.rect(150,25,100,100);
//     ctx.fill(rectangle);

// }

// rectangle();

// function arc() {

//     ctx.beginPath();
//     ctx.moveTo(75,50);
//     ctx.lineTo(100,75);
//     ctx.lineTo(100,25);
//     ctx.closePath();
//     ctx.fill();

// }

// arc()

// function ellipse() {

//     let ellipse = new Path2D();
//     ellipse.arc(100, 100, 15, 0, Math.PI * 2);
//     ctx.fill(ellipse);

// }

// ellipse()

// function text() {

//     ctx.font = "48px ";
//     ctx.fillText("Hello world", 10, 50)

// }

// text();

// function image() {
//     var img = new Image();
//     img.onload = function(){
//       ctx.drawImage(img,40,60);

//     };
//     img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
// }
// image()

function tube() {
    ctx.arc(100, 100, 50, 0, Math.PI);
    ctx.stroke();
}

tube();
