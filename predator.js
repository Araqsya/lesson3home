var LivingCreature1= require("./livingcreature")
module.exports=class Predator extends  LivingCreature1 {
   constructor(x, y, index){
        super(x, y, index, matrix);
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
    move(matrix) {
        matrix=this.matrix
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var y = newCell[1]
            var x = newCell[0]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy--
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    mul(matrix, PredatorArr=this.PredatorArr) {
        matrix=this.matrix
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (this.energy >= 22) {
            var newPredator = new Predator(newCell[0], newCell[1], this.index);
            PredatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] == 3;
            this.energy = 12;
        }
    }
    die(matrix, PredatorArr=this.PredatorArr) {
        matrix=this.matrix
        for (var i in PredatorArr) {
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
    eat(matrix, PredatorArr=this.PredatorArr, GrassEaterArr=this.GrassEaterArr) {
        matrix=this.matrix
        var emptyCells = this.chooseCell(2, matrix, PredatorArr=this.PredatorArr, GrassEaterArr=this.GrassEaterArr);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 3
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
            this.mul(matrix=this.matrix);
        } else {
            this.move(matrix=this.matrix);
        }
    }
}
