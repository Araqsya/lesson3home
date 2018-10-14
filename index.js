var grassArr = [];
var GrassEaterArr = [];
var PredatorArr = [];
var BirdArr = [];
var EggArr = [];
var MaleArr = [];
var FemaleArr = [];
var matrix = createMatrix(100, 100);
function createMatrix(n, m) {
    var matrix1 = [];
    for (var y = 0; y < m; y++) {
        matrix1[y] = [];
        for (var x = 0; x < n; x++) {
            matrix1[y][x] = Math.round(Math.random())
        }
    }
    matrix1[89][15] = 2;
    matrix1[8][99] = 2;
    matrix1[5][55] = 2;
    matrix1[87][63] = 2;
    matrix1[31][75] = 2;
    matrix1[22][63] = 2;
    matrix1[92][5] = 3;
    matrix1[5][88] = 3;
    matrix1[30][49] = 3;
    matrix1[99][9] = 3;
    matrix1[5][0] = 3;
    matrix1[0][99] = 5;
    matrix1[99][99] = 5;
    matrix1[0][0] = 5;
    matrix1[99][0] = 5;
    matrix1[51][45] = 6;
    matrix1[49][45] = 6;
    matrix1[50][46] = 7;
    return matrix1;
}
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
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1))
        }
        else if (matrix[y][x] == 2) {
            GrassEaterArr.push(new GrassEater(x, y, 2))
        }
        else if (matrix[y][x] == 3) {
            PredatorArr.push(new Predator(x, y, 3))
        }
        else if (matrix[y][x] == 5) {
            EggArr.push(new Egg(x, y, 5))
        }
        else if (matrix[y][x] == 4) {
            BirdArr.push(new Bird(x, y, 4))
        }
        else if (matrix[y][x] == 6) {
            MaleArr.push(new Male(x, y, 6))
        }
        else if (matrix[y][x] == 7) {
            FemaleArr.push(new Female(x, y, 6))
        }
    }
}
setInterval(function () {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                console.log(1)
            }
            else if (matrix[y][x] == 2) {
                console.log(2)
            }
            else if (matrix[y][x] == 3) {
                console.log(3)
            }
            else if (matrix[y][x] == 4) {
                console.log(4)
            }
            else if (matrix[y][x] == 5) {
                console.log(5)
            }
            else if (matrix[y][x] == 6) {
                console.log(6)
            }
            else if (matrix[y][x] == 7) {
                console.log(7)
            }
            else if (matrix[y][x] == 0) {
                console.log(0)
            }
        }
    };
    for (var i in grassArr) {
        grassArr[i].mul(matrix, grassArr);
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat(matrix,grassArr,GrassEaterArr);
    }

    for (var i in PredatorArr) {
        PredatorArr[i].eat(matrix,GrassEaterArr, PredatorArr);
    }

    for (var i in BirdArr) {
        BirdArr[i].eat(matrix,BirdArr, PredatorArr);
    }
    for (var i in EggArr) {
        EggArr[i].mul(matrix, EggArr, BirdArr);
    }
    for (var i in MaleArr) {
        MaleArr[i].eat(matrix, MaleArr, PredatorArr,grassArr,GrassEaterArr,BirdArr,EggArr);
    }
    for (var i in FemaleArr) {
        FemaleArr[i].eat(matrix, FemaleArr, PredatorArr,grassArr,GrassEaterArr,BirdArr,EggArr );
    }


}, 3000)
