"use strict";
var message = "Hello World";
function test() {
    return (message);
}
//I cannot figure out how to make the listener only apply to the button and not the whole page
//Answered here https://stackoverflow.com/questions/21262693/addeventlistener-not-working-in-javascript
document.getElementById("code").addEventListener("click", function () {
    var code1 = "<strong>JavaScript</strong><br><br>let variable = \"Hello World\";<br><br>";
    var code2 = "<strong>TypeScript</strong><br><br>let variable: string = \"Hello World\";<br><br>";
    var code = document.getElementById("code").innerHTML;
    if (code1 === code) {
        document.getElementById("code").innerHTML = code2;
    }
    else {
        document.getElementById("code").innerHTML = code1;
    }
});
//# sourceMappingURL=helloworld.js.map