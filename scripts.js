//Wow! You've really dug deep to find this! Unfortunately it's exceedinly boring
var Days = (new Date() - new Date(2002, 08, 09));
Days = Math.round(Days/(86400000));
var Years = Math.floor(Days /(365));
document.getElementById("demo").innerHTML = "I'm currently " +  Days + " Days (" + Years + " Years ) Old"

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > screen.height || document.documentElement.scrollTop > screen.height) { //strange chrome os bug causes this not towkr work with just body.scrollTop.
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
