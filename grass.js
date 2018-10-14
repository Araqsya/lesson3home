var LivingCreature1= require("./livingcreature")
module.exports=class Grass extends LivingCreature1 {
    mul(matrix, grassarr) {
        this.multiply++;
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        // console.log(newCell, this.multiply);
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassarr.push(newGrass);

            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}