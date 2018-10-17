var Bird = require("./bird")
var LivingCreature1= require("./livingcreature")
module.exports=class Egg extends  LivingCreature1 {
   constructor(x, y, index, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr){
        super(x, y, index, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr);
        this.multiply = 0;
        this.N = 1;
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
    transform(matrix=this.matrix, EggArr=this.EggArr, BirdArr=this.BirdArr) {
        for (var i in EggArr) {
            if (this.x == EggArr[i].x && this.y == EggArr[i].y) {
                EggArr.splice(i, 1);
                break;
            }
            matrix[this.y][this.x] = 4;
            var newBird = new Bird(this.x, this.y, this.index);
            BirdArr.push(newBird);
        }
    }
    mul(matrix=this.matrix, EggArr=this.EggArr) {
        this.multiply++;
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        if (this.multiply >= 11 && newCell) {
            var newEgg = new Egg(newCell[0], newCell[1], this.index);
            EggArr.push(newEgg);
            matrix[newCell[1]][newCell[0]] = 5;
            this.multiply = 0;
            this.N++
            if (this.N >= 3) {
                this.N = 0
                this.transform();
            }
        }
    }
}