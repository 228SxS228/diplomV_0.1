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

    setTube(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        ctx.beginPath();
        ctx.arc(a, b, c, 0, Math.PI); //100, 100, 30
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(d, e, f, Math.PI * 2, 0); //100, 60, 25
        ctx.stroke();

        ctx.beginPath(); //100, 100, 30, 100, 60, 25, 76, 56, 70, 100, 124, 55,130, 100
        ctx.moveTo(g, h); //76, 56
        ctx.lineTo(i, j); //70, 100
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(k, l); //124, 55
        ctx.lineTo(m, n); //130, 100
        ctx.stroke();
    } //подумать как пересовать тюбу

    setLine(x, y, w, h) {
        ctx.beginPath();
        ctx.moveTo(x, y); //20, 55
        ctx.lineTo(w, h); //30, 150
        ctx.stroke();
    }

    setPolyline(a, b, c, d, e, f, g, h) {
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(c, d); //40, 55,40, 150,120, 150,100, 90
        ctx.lineTo(e, f);
        ctx.lineTo(g, h);
        ctx.stroke();
    }

    setSymbol(a, b, c, d, e, f, g, h, i, j, k, l, m, n,o,p,q,r,s,t,u,v,w,x,y,z) {
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.quadraticCurveTo(c, d, e, f);
        ctx.quadraticCurveTo(g,h, i, j);
        ctx.quadraticCurveTo(k, l, m, n); //75, 25, 25, 25, 25, 62.5, 25, 100, 50, 100, 50, 120, 30, 125, 60, 120, 65, 100, 125, 100, 125, 62.5, 125, 25, 75, 25
        ctx.quadraticCurveTo(o, p, q, r);
        ctx.quadraticCurveTo(s, t, u, v);
        ctx.quadraticCurveTo(w, x, y, z);
        ctx.stroke();
    }
}

const t = new UI().setEllipse(260, 25, 20);

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
