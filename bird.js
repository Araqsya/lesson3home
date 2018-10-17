var LivingCreature1= require("./livingcreature")
module.exports=class Bird  extends  LivingCreature1 {
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

    die(matrix=this.matrix, BirdArr=this.BirdArr) {

        for (var i in BirdArr) {
            if (this.x == BirdArr[i].x && this.y == BirdArr[i].y) {
                BirdArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }

    move(matrix=this.matrix) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var y = newCell[1]
            var x = newCell[0]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy--
            if (this.energy == 0) {
                this.die();
            }
        }
    }

    eat(matrix=this.matrix, PredatorArr=this.PredatorArr) {
        var emptyCells = this.chooseCell(3, matrix);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0]
            var y = newCell[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            this.y = y
            this.x = x
            this.energy += 3
            for (var i in PredatorArr) {
                if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            var emptyCells = this.chooseCell(1);
            var newCell = this.random(emptyCells);
            if (newCell) {
                var x = newCell[0]
                var y = newCell[1]
                matrix[y][x] = 4
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
            }
            else {
                this.move(matrix=this.matrix);
            }
        }
    }
}