var LivingCreature1= require("./livingcreature")
module.exports=class Female  extends  LivingCreature1{
   constructor(x, y, index){
        super(x, y, index);
        this.energy = 20;
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
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
    die(matrix, FemaleArr) {

        for (var i in FemaleArr) {
            if (this.x == FemaleArr[i].x && this.y == FemaleArr[i].y) {
                FemaleArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
    move(matrix) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var y = newCell[1]
            var x = newCell[0]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy--
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    mul(matrix, FemaleArr, MaleArr) {
        var emptyCells = this.chooseCell(6);
        var Man2 = this.random(emptyCells);
        if (Man2) {

            var emptyCells = this.chooseCell(0);
            var newCell = this.random(emptyCells);
            var a = Math.round(Math.random())
            if (a == 1) {
                var newFemale = new Female(newCell[0], newCell[1], this.index);
                FemaleArr.push(newFemale);
                matrix[newCell[1]][newCell[0]] == 6;
                this.energy = 12;
            }
            else {
                var newMale = new Male(newCell[0], newCell[1], this.index);
                MaleArr.push(newMale);
                matrix[newCell[1]][newCell[0]] == 7;
                this.energy = 12;
            }
        }
    }
    eat(matrix, PredatorArr,grassArr,GrassEaterArr,BirdArr,EggArr) {
        var emptyCells = this.chooseCell(5, matrix);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 3
            for (var i in EggArr) {
                if (x == EggArr[i].x && y == EggArr[i].y) {
                    EggArr.splice(i, 1);
                    break;
                }
            }
        }

        var emptyCells = this.chooseCell(4);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 2
            for (var i in BirdArr) {
                if (x == BirdArr[i].x && y == BirdArr[i].y) {
                    BirdArr.splice(i, 1);
                    break;
                }
            }
            this.mul(matrix, FemaleArr, MaleArr);
        }

        var emptyCells = this.chooseCell(3);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 2
            for (var i in PredatorArr) {
                if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
            this.mul(matrix, FemaleArr, MaleArr);
        }

        var emptyCells = this.chooseCell(2);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 2
            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.mul(matrix, FemaleArr, MaleArr);
        }

        var emptyCells = this.chooseCell(1);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 2
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.mul(matrix, FemaleArr, MaleArr);
        }
        else {
            this.move(matrix);

        }
    }
}