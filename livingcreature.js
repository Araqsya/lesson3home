var grassArr =require("./grassArr")
var GrassEaterArr =require("./GrassEaterArr");
var PredatorArr =require("./PredatorArr");
var BirdArr =require("./BirdArr");
var EggArr =require("./EggArr");
var MaleArr =require("./MaleArr");
var FemaleArr =require("./FemaleArr");
module.exports = class LivingCreature {
    constructor(x, y, index, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr) {
        this.matrix = require("./index.js")
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
        this.FemaleArr=FemaleArr;
        this.MaleArr=MaleArr;
        this.grassArr=grassArr;
        this.GrassEaterArr=GrassEaterArr;
        this.PredatorArr=PredatorArr
        this.EggArr=EggArr
        this.BirdArr=BirdArr
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
    chooseCell(ch, matrix = this.matrix) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    random(arr) {
        var item = arr[Math.floor(Math.random() * arr.length)];
        return item
    }

}


