//calculator

var a = process.argv[2];
var b = (parseInt(process.argv[3]));
var c = (parseInt(process.argv[4]));

if (a == "add") {
   console.log(b + c);
} 

else if
 (a == "multiply") {
    console.log(b*c);
 }

else if (a == "divide") {
    console.log(b/c);
}

else if (a == "subtract") {
    console.log(b-c);
}

else if (a == "%") {
    console.log(b%c);
}

else if (a == "exponent") {
    console.log(Math.pow(b, c));
}

//algebra 4x+2=10
else if (a == "algebra") {
    console.log( );
}