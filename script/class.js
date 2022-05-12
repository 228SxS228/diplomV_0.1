const ctx = document.getElementById("canvas").getContext("2d");

class UI {
    setRectangle(data) {
        Object.entries(data).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        const rectangle = new Path2D();
        ctx.beginPath();
        rectangle.rect();
        ctx.closePath();
        ctx.stroke(rectangle);
    }

    setEllipse() {
        let ellipse = new Path2D();
        ctx.beginPath();
        ellipse.arc(260, 25, 20, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke(ellipse);
    }

    setText() {
        ctx.font = "48px ";
        ctx.fillText("Hello world", 10, 10);
    }

    setImage() {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 40, 60);
        };
        img.src = "../im-upload-image-1539177877702.jpg";
    }

    setTube() {
        ctx.beginPath();
        ctx.arc(100, 100, 30, 0, Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(100, 60, 25, Math.PI * 2, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(76, 56);
        ctx.lineTo(70, 100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(124, 55);
        ctx.lineTo(130, 100);
        ctx.stroke();
    } //подумать как пересовать тюбу

    setLine() {
        ctx.beginPath();
        ctx.moveTo(20, 55);
        ctx.lineTo(30, 150);
        ctx.stroke();
    }

    setPolyline() {
        ctx.beginPath();
        ctx.moveTo(40, 55);
        ctx.lineTo(40, 150);
        ctx.lineTo(120, 150);
        ctx.lineTo(100, 90);
        ctx.stroke();
    }

    setSymbol() {
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
}

class Data {
    constructor() {
        this.ui = new UI();
    }

    setFetch() {
        return fetch("http://localhost:5050/data.json").then((response) => {
            return response
                .json()
                .then((data) => {
                    console.log(data);
                    this.ui.setRectangle(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    setData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:5050/data.json");
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.send();
        xhr.addEventListener("load", function () {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.response);
                console.log(data);
            } else {
                console.error("Baaaa");
            }
        });
    }
}

const test = new Data().setFetch();