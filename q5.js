let read =require('readline-sync')
let f_fare =[]
let a=1
let b=0
let n = read.question("Enter up to want ");
for (let i = 0; i <=n; i++) {
    var f = read.question("Enter flight fare in decimnal:");
    if(f%2==0)
    {
    f_fare[b]=f
    b=b+2
    }
    else{
    f_fare[a]=f
    a=a+2
    }
      
}
console.log(f_fare);




