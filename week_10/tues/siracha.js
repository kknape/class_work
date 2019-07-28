

//console.log(process.argv[2]);

//console.log(parseInt(process.argv[4]) + parseInt(process.argv[4]));

//my solution
if (parseInt(process.argv[2]) == (process.argv[3])){
    console.log("true")
}
else console.log("false")
;

//teacher's solution
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
    console.log(true);
}
else {
    console.log(false);
}

//another solution