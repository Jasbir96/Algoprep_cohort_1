let a = true;
console.log("Before");
function fn() {
    a = false;
    console.log("I broke the while loop");
}
setTimeout(fn, 1000);
console.log("After");
while (a) {

}

/****
 * Browser
 * * console.log-> browser
 * * setTimout -> browser
 * * document -> brwoser
 * * window -> browser
 * What is JS doing then 
 * Rule of thumb 
 *  JS : logic
 *  Enviornment : features
 * **/ 

/****
 * Mobile Application -> React Native -> JS
 * Frontend -> Browser -> JS
 * Backend -> Nodejs -> JS
 * Desktop App-> Electron -> JS
 * **/ 


