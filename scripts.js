//Wow! You've really dug deep to find this! Unfortunately it's exceedinly boring
var Days = (new Date() - new Date(2002, 08, 09));
Days = Math.round(Days/(86400000));
var Years = Math.floor(Days /(365));
document.getElementById("demo").innerHTML = "I'm currently " +  Days + " Days (" + Years + " Years ) Old"