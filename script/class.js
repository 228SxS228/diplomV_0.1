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

    setEllipse(x, y, z) {
        let ellipse = new Path2D();
        ctx.beginPath();
        ellipse.arc(x, y, z, 0, Math.PI * 2); //260, 25, 20
        ctx.closePath();
        ctx.stroke(ellipse);
    }

    setText(text, font, x, y) {
        ctx.font = font;
        ctx.fillText(text, x, y);
    }

    setImage(image, x, y) {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, x, y); //40, 60
        };
        img.src = image;
    }

    setTube(arr) {
        
        ctx.beginPath();
        ctx.arc(arr[0], arr[1], arr[2], 0, Math.PI); //100, 100, 30
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(arr[3], arr[4], arr[5], Math.PI * 2, 0); //100, 60, 25
        ctx.stroke();

        ctx.beginPath(); //100, 100, 30, 100, 60, 25, 76, 56, 70, 100, 124, 55,130, 100
        ctx.moveTo(arr[6], arr[7]); //76, 56
        ctx.lineTo(arr[8], arr[9]); //70, 100
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(arr[10], arr[11]); //124, 55
        ctx.lineTo(arr[12], arr[13]); //130, 100
        ctx.stroke();
    } //подумать как пересовать тюбу

    setLine(x, y, w, h) {
        ctx.beginPath();
        ctx.moveTo(x, y); //20, 55
        ctx.lineTo(w, h); //30, 150
        ctx.stroke();
    }

    setPolyline(arr) {
        ctx.beginPath();
        ctx.moveTo(arr[0], arr[1]);
        ctx.lineTo(arr[2], arr[3]); //40, 55,40, 150,120, 150,100, 90
        ctx.lineTo(arr[4], arr[5]);
        ctx.lineTo(arr[6], arr[7]);
        ctx.stroke();
    }

    setSymbol(arr) {
        ctx.beginPath();
        ctx.moveTo(arr[0], arr[1]);
        ctx.quadraticCurveTo(arr[2], arr[3], arr[4], arr[5]);
        ctx.quadraticCurveTo(arr[6], arr[7], arr[8], arr[9]);
        ctx.quadraticCurveTo(arr[10], arr[11], arr[12], arr[13]); //75, 25, 25, 25, 25, 62.5, 25, 100, 50, 100, 50, 120, 30, 125, 60, 120, 65, 100, 125, 100, 125, 62.5, 125, 25, 75, 25
        ctx.quadraticCurveTo(arr[14], arr[15], arr[16], arr[17]);
        ctx.quadraticCurveTo(arr[18], arr[19], arr[20], arr[21]);
        ctx.quadraticCurveTo(arr[22], arr[23], arr[24], arr[25]);
        ctx.stroke();
    }
}

const t = new UI().setTube([100, 100, 30, 100, 60, 25, 76, 56, 70, 100, 124, 55,130, 100]);

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