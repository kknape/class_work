/* **Instructions:**
  * Starting from scratch, build a Node application called `bank.js` which allows takes in user inputs via the command line to register bank transactions.
  * The transactions possible are:
    * `total` - this should tally up all of the money in the bank balance and display it for the user.
    * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)
    * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)
    * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
  * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.
  * HINT: Consider making a series of if-else or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
  * Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

*/
//Total - read file and add all values, parseInt to convert to number, add numbers

var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

//Create a switch-case statement (if-else will also work).
//The switch-case will direct which function gets run

switch (action) {
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        break;
    
    case "withdraw":
        withdraw();
        break;
    
    case "lotto":
        lotto();
        break;
}

function total() {
fs.readFile("bank.txt", "utf8", function(err, data){
    if (err) {
        return console.log("err");
    }
    data = (data.split (", "));
    var result = 0;

    //loop through each number and add them together to get the total
   for (var i=0; i< data.length; i++) {
        if (parseFloat(data[i])) {
            result = result + parseFloat(data[i]);
        }
    }
    console.log("You have a total of " + result.toFixed(2));
});
}