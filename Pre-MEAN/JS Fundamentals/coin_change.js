function coinChange(int){
    var dollar = 0;
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    var newInt = 0;
    while(int >= 100){
        int -= 100;
        dollar++;
    }
    while(int >= 25){
        int -= 25;
        quarter++;
    }
    while(int >= 10){
        int -= 10;
        dime++;
    }
    while(int >= 5){
        int -= 5;
        nickel++;
    }
    while(int >= 1){
        int -= 1;
        penny++;
    }
    var denom = "Dollars: " + dollar + " Quarters: " + quarter + " Dimes: " + dime + " Nickels: " + nickel + " Pennies: " + penny;
    return denom;
}

coinChange(247)