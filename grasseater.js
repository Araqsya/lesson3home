var LivingCreature1= require("./livingcreature")
module.exports=class GrassEater extends LivingCreature1 {
    constructor(x, y, index, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr){
        super(x, y, index, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr);
        this.energy = 10;
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
    move(matrix=this.matrix) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var y = newCell[1]
            var x = newCell[0]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy--
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    mul(matrix=this.matrix, GrassEaterArr=this.GrassEaterArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        if (this.energy == 16) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            GrassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] == 2;
            this.energy = 10;
        }
    }
    die(matrix=this.matrix, GrassEaterArr=this.GrassEaterArr) {

        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
    eat(matrix=this.matrix, grassArr=this.grassArr) {
        var emptyCells = this.chooseCell(1, matrix=this.matrix);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var y = newCell[1]
            var x = newCell[0]
            matrix[y][x] = 2
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
            this.mul(matrix=this.matrix, GrassEaterArr=this.GrassEaterArr);
        } else {
            this.move(matrix=this.matrix);
        }
    }
}