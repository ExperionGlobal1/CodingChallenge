// c.input name and search and display

let read = require('readline-sync')
let strarray = []
let limit = read.question('Enter the up to  number: ')

for (let i = 0; i < limit; i++) {   
var data =read.question('Enter the name of passenger:-');
strarray[i] = data 
}
console.log(strarray)


/*  Searching */
var nam = read.question("Enter number to search : ");
for (let i = 0; i < strarray.length; i++) {
   if(nam == strarray[i]){
    console.log("The searched fare value is -> "+ strarray[i] + "  and is in the position -> " + i+ " of the fare value."+'\n');
    break;
   }
 
    
}

//d.print length of name

for(let i=0;i<strarray.length;i++){
   
    process.stdout.write(strarray[i].length +' '.toString());
}
console.log('\n')


//e.splite name of each element
console.log("Display the splite value")

for(let i=0;i<strarray.length;i++){
   
   console.log(strarray[i].split(' '));
    
}


// //a. asc order
for (let i = 0; i < strarray.length; i++) {

  for (let j = i + 1; j < strarray.length; j++) {
    if (strarray[i] > strarray[j]) {
      temp = strarray[i];
      strarray[i] = strarray[j];
      strarray[j] = temp;
    }
  }
}
process.stdout.write('Asc Order:'+ strarray +' '.toString()+'\n');


//b.desc order
for(let k=0;k<strarray.length;k++){
    for(let l=k+1;l<strarray.length;l++){
        if(strarray[k]<strarray[l]){
            temp =strarray[l];
            strarray[l]=strarray[k];
            strarray[k]=temp;
        }
    }
}
process.stdout.write('Desc Order:'+ strarray +' '.toString()+'\n');


//f.Duplicate array

for(let i=0; i< strarray.length;i++){
    for(let j=i + 1; j< strarray.length;j++){

        if(strarray[i] == strarray[j]){
        process.stdout.write('Duplicate array is:'+strarray[j] +' '.toString()+'\n');
        }
    }


}

