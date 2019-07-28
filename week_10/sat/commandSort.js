var numbers = process.argv;

var filterArray = [];
for (var i=2; i < numbers.length; i++){
    filterArray.push(parseInt(numbers[i]));
}
console.log(filterArray);

console.log(filterArray.sort(comapareFunc));

function comapareFunc(a, b) {
    return (b-a);
}