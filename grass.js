var LivingCreature1= require("./livingcreature")
module.exports=class Grass extends LivingCreature1 {
    mul(matrix, grassArr=this.grassArr) {
        this.multiply++;
        var emptyCells = this.chooseCell(0, matrix=this.matrix);
        var newCell = this.random(emptyCells);
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);

            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}