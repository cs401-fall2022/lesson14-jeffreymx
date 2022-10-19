"use strict";
var message = "Hello World";
console.log(message);
function test() {
    return (message);
}
//I cannot figure out how to make the listener only apply to the button and not the whole page
document. /*getElementById("code").*/addEventListener("click", swapCode);
function swapCode() {
    var code1 = "<strong>JavaScript</strong><br><br>let variable = \"Hello World\";<br><br>";
    var code2 = "<strong>TypeScript</strong><br><br>let variable: string = \"Hello World\";<br><br>";
    var code = document.getElementById("code").innerHTML;
    if (code1 === code) {
        document.getElementById("code").innerHTML = code2;
    }
    else {
        document.getElementById("code").innerHTML = code1;
    }
}
//# sourceMappingURL=helloworld.js.map