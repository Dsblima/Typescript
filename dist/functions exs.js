var message = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy name, " + name + "?"); };
call('R2');
//o valor padrão pode ser uma chamada de função.
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
