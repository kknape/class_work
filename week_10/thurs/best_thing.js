/* **Instructions:**
​
  * Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.
​
    * HINT: If you are struggling to figure out how to loop your way through the text, look into the `.split()` method. This could make your life a whole lot easier.
​
  * Your final output should look something like this:
​
  ```
  lazy boy recliner
    massage
    meditation
    hot shower
    cheese fondue
    hot coffee with cashew milk
    kitten falling asleep on my lap
  ```
*/

//calls the filesystem module
var fs = require("fs");

//call readFile
fs.readFile("best_things_ever.txt", "utf8", function(error,data) {

    if (error) {
        return console.log(error);}
    
    var dataArr = data.split (", ");
    //console.log(dataArr);

    for (var i = 0; i < dataArr.length; i++) {
    console.log(dataArr[i]);
    }
});
