var matrix = [
    [0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 3, 1, 5,],
    [1, 0, 2, 0, 4, 0, 0, 0, 0, 3, 2, 0, 4, 1, 0, 1],
    [0, 1, 0, 3, 0, 0, 0, 0, 1, 4, 0, 0, 0, 1, 0, 2],
    [0, 0, 1, 0, 0, 2, 0, 1, 3, 0, 0, 5, 3, 1, 0, 3],
    [4, 1, 0, 0, 0, 0, 0, 4, 1, 3, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0, 3, 0, 0, 0, 2, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 3, 0, 1, 4, 5, 4, 0, 4, 3, 1, 0, 3],
    [1, 1, 0, 0, 3, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2],
    [2, 1, 0, 0, 3, 0, 1, 0, 1, 0, 0, 0, 3, 1, 0, 2],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 0],
    [3, 1, 0, 5, 3, 0, 1, 0, 1, 0, 0, 0, 3, 4, 0, 2],
    [4, 1, 0, 1, 0, 4, 3, 5, 0, 0, 0, 0, 0, 1, 0, 2],
    [1, 1, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 3, 1, 0, 3],
    [1, 1, 0, 0, 3, 1, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0],
    [0, 1, 0, 0, 3, 0, 1, 0, 1, 4, 0, 0, 3, 1, 0, 0],
    [0, 0, 0, 4, 0, 1, 0, 1, 0, 0, 1, 1, 2, 1, 0, 0],
    [4, 0, 0, 0, 3, 0, 1, 0, 1, 0, 0, 1, 0, 4, 0, 5],

];


var side = 50;
let grassArr = [];
let grassEaterArr = [];
let monstrArr = [];
let bigmonstrArr = [];
let gyuxaciArr = [];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 1)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let monstr = new Monstr(x, y, 1)
                monstrArr.push(monstr)
            }
            else if (matrix[y][x] == 4) {
                let bigmonstr = new Bigmonstr(x, y, 1)
                bigmonstrArr.push(bigmonstr)
            }
            else if (matrix[y][x] == 5) {
                let gyuxaci = new Gyuxaci(x, y, 1)
                gyuxaciArr.push(gyuxaci)
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("#D2B48C")
            }
            rect(x * side, y * side, side, side);
            fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in monstrArr) {
        monstrArr[i].eat()
    }
    for (var i in bigmonstrArr) {
        bigmonstrArr[i].eat()
    }
    for (var i in gyuxaciArr) {
        gyuxaciArr[i].eat()
    }
}
