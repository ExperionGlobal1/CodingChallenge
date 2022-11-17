
let P_name=[];
let Destination=[];

let name =' ';
let Dest =' ';

let read=require('readline-sync');
let n =read.question("Enter the up to number:");

for(let i=0;i<n;i++){
    name = read.question("Enter the passenger name:");
    P_name.push(name);

    Dest = read.question("Enter the destination place:");
    Destination.push(Dest);
 
}
console.log(P_name);
console.log(Destination);

let merge_Arry =[];
 merge_Arry = P_name.concat(Destination);
 console.log("After merging of two array;")
console.log(merge_Arry);