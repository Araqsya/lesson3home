var grassArr =require("./grassArr")
var GrassEaterArr =require("./GrassEaterArr");
var PredatorArr =require("./PredatorArr");
var BirdArr =require("./BirdArr");
var EggArr =require("./EggArr");
var MaleArr =require("./MaleArr");
var FemaleArr =require("./FemaleArr");

function createMatrix(n, m) {
 var matrix1 = [];
    for (var y = 0; y < m; y++) {
        matrix1[y] = [];
        for (var x = 0; x < n; x++) {
            matrix1[y][x] = Math.round(Math.random())
        }
    }
    matrix1[19][15] = 2;
    matrix1[8][9] = 2;
    matrix1[5][7] = 2;
    matrix1[7][3] = 2;
    matrix1[11][5] = 2;
    matrix1[2][13] = 2;
    matrix1[12][5] = 3;
    matrix1[1][8] = 3;
    matrix1[10][9] = 3;
    matrix1[14][18] = 3;
    matrix1[5][0] = 3;
    matrix1[0][9] = 5;
    matrix1[9][9] = 5;
    matrix1[0][0] = 5;
    matrix1[9][0] = 5;
    matrix1[11][5] = 6;
    matrix1[9][5] = 6;
    matrix1[10][6] = 7;
    return matrix1;
}
module.exports=matrix = createMatrix(20, 20);
var LivingCreature1= require("./livingcreature")
var Grass = require("./grass")
function mygrass() {
    console.log("grass=1")
}
mygrass()
var GrassEater = require("./grasseater")
function mygrasseater() {
    console.log("grasseater=2")
}
mygrasseater()
var Predator = require("./predator")
function mypredator() {
    console.log("predator=3")
}
mypredator()
var Egg = require("./egg")
function myegg() {
    console.log("egg=5")
}
myegg()
var Bird = require("./bird")
function mybird() {
    console.log("bird=4")
}
mybird()
var Male = require("./male")
function mymale() {
    console.log("male=6")
}
mymale()
var Female = require("./female")
function myfemale() {
    console.log("female=7")
}
myfemale()
new LivingCreature1(FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr)
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1, grassArr))
        }
        else if (matrix[y][x] == 2) {
            GrassEaterArr.push(new GrassEater(x, y, 2, GrassEaterArr, grassArr))
        }
        else if (matrix[y][x] == 3) {
            PredatorArr.push(new Predator(x, y, 3, PredatorArr, GrassEaterArr))
        }
        else if (matrix[y][x] == 5) {
            EggArr.push(new Egg(x, y, 5, EggArr, BirdArr))
        }
        else if (matrix[y][x] == 4) {
            BirdArr.push(new Bird(x, y, 4, BirdArr, PredatorArr))
        }
        else if (matrix[y][x] == 6) {
            MaleArr.push(new Male(x, y, 6, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr))
        }
        else if (matrix[y][x] == 7) {
            FemaleArr.push(new Female(x, y, 6, FemaleArr, MaleArr, grassArr, GrassEaterArr, PredatorArr, EggArr, BirdArr))
        }
    }
}
setInterval(function(){ console.log(matrix);
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat();
    }

    for (var i in PredatorArr) {
        PredatorArr[i].eat();
    }

    for (var i in BirdArr) {
        BirdArr[i].eat();
    }
    for (var i in EggArr) {
        EggArr[i].mul();
    }
    for (var i in MaleArr) {
        MaleArr[i].eat();
    }
    for (var i in FemaleArr) {
        FemaleArr[i].eat();
    }
}, 1000);