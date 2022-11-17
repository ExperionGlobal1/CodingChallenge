
let point=0
var read = require('readline-sync')
let name = read.question("Enter the name of passenger...");
mile=read.question("Enter the distance travelled...");

if(mile < 10000 ){
    point=10;
    console.log(point)
}
else if(mile < 20000){
    point=20;
    console.log(point)
}
else if(mile < 50000){
    point=30;
    console.log(point)
}
else if(mile < 100000){
    point=50;
    console.log(point)
}