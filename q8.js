
let fare=[];
let dest=[];
// Increament for accepting the input

let fareget='';
let destget='';
var read=require('readline-sync')
l=read.question("Enter the number of details...");

for(i=0;i<l;++i){
    fareget=read.question("Enter the fare value...");
    fare.push(fareget)

    destget=read.question("Enter the destination place...");
    dest.push(destget)

}

console.log(fare)
console.log(dest)

let inputkeyboard=read.question("Enter the number from keyboard ...");

if(inputkeyboard>fare.length)
console.log("Invalid keyword")

else
{console.log("Destination:",dest[inputkeyboard-1])
console.log("fare",fare[inputkeyboard-1])
}