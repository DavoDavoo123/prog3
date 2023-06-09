class Bigmonstr {
    constructor(x, y, index) {
            this.x = x,
            this.y = y,
            this.index = index,
            this.energy = 10
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newbigmonstr = new Bigmonstr(newCell[0], newCell[1], this.index);
            bigmonstrArr.push(newbigmonstr);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 9
        }
    }
    move() {
        this.energy++;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 20) {
            this.die();
        }
    }

    eat() {
        let foods = this.chooseCell(3)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for (var i in monstrArr) {
                if (newX == monstrArr[i].x && newY == monstrArr[i].y) {
                    monstrArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 5) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in bigmonstrArr) {
            if (this.x == bigmonstrArr[i].x && this.y == bigmonstrArr[i].y) {
                bigmonstrArr.splice(i, 1);
                break;
            }
        }
    }
}