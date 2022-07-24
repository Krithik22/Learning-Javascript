var myName = prompt("Enter your name");
var firstChar = myName.slice(0,1);

var capitalizesFirstChar = firstChar.toUpperCase()

var remName = myName.slice(1,myName.length)

remName = remName.toLowerCase();
alert("Hello, " + capitalizesFirstChar + remName);