let read=require('readline-sync');
// let f_fare,f_fare1,f_fare2,f_fare3;
let f_fare = 0;
let S_b_time,E_b_time;
f_fare=read.question("Enter flight fare :")//100
S_b_time=read.question("Enter the starting booking time:")//6
E_b_time=read.question("Enter the end booking time:")//9

 //a.if booking time from 6am to 9am, apply 10% fare increase and print
    if(S_b_time>=6 && E_b_time<=9){
        
        //110
        f_fare=parseFloat(f_fare)+parseFloat((f_fare * 10)/100);
        console.log(1,f_fare)
    }
   //b. If booking time from 9am to 5pm, apply 20% fare increase and print
        if(S_b_time>=9 && E_b_time<=5){
            let f_fare1=parseFloat(f_fare)+parseFloat((f_fare *20)/100);
            console.log(2,f_fare)
            }

    //c.If booking time from 5pm to 11pm, apply 7% fare increase and print
             if(S_b_time>=5 && E_b_time<=11){
                f_fare=parseFloat(f_fare)+parseFloat((f_fare *7)/100);
                console.log(3,f_fare)
                }
   //d.If booking time from 11pm to 6am, apply 5% fare increase and print
                if(S_b_time>=11 && E_b_time<=6){
                    f_fare=parseFloat(f_fare)+parseFloat((f_fare *5)/100);
                     console.log(4,f_fare)
                    }
                   
                