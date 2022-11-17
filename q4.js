let read =require('readline-sync')
let userinput = read.question("Enter the dob in dd-mm-yyyy format:")

//e.Display his/her age in Years

function ageCalculator() {   
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      console.log("choose date please")  
      return false;   
    } 
    else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age in years,months,weeks,days,hours 
            console.log('User DOB year name is->:'+year)
            
            console.log("How many years old ->"+age+"years")

            let month = parseInt(age)*12;
            console.log("Age is ->"+ month+"Months")

            let weeks = parseInt(month)*4;
            console.log("Age is  ->"+ weeks+"weeks")

            let days = parseInt(weeks)*7;
            console.log("Age is ->"+days+"Days")

            let hours =parseInt(days)*24;
            console.log('Age is->'+hours+"Hours")

    //three conditions to find out the leap year
    if((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0))
     {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}  

} 
ageCalculator(); 

