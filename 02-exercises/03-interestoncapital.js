
/*Given a capital, monthly interest and the number of months, find out the total capital*/ 

function getTotalCapital (startCapital, monthlyInterest, months) {
    let totalCapital = startCapital;
    for (let i=0; i<months; i++) {
        const interest = totalCapital / 100 * monthlyInterest;    
         totalCapital += interest;
    }
    console.log (totalCapital);
}

getTotalCapital (1000,10,3);
