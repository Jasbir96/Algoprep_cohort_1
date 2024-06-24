// console.log("hello DOM :)");
// read the content of p tag
// 1. select 

// html inside the second child
// console.log(document.children)
// const html=document.children[0];
// const body=html.children[1];

// console.log("innerHTML", body.innerHTML);
/**********
 * 
 *  querySelector -> selector -> first matching 
 * element return
 * const body = document.querySelector("body");
 * console.log(body.innerHTML);
 * 
 * */
// const pTag = document.querySelector("p");
// console.log("content inside p:", pTag.textContent);
// const ptagArr = document.querySelectorAll("p");
// const textData = ptagArr[1].innerText;
// console.log("2nd p tag ", textData);

// class
// const clasPtag=document.querySelector(".first");
// console.log("first",clasPtag.textContent);
// id
const idPtTag = document.querySelector("#unique");
// read 
// console.log("second",idPtTag.textContent);
// console.log("second",idPtTag.innerText);
// console.log("=====================")
// const body = document.querySelector("body");
// console.log(body.innerHTML);
// console.log("==========================")
// console.log("innnerText ->",body.innerText);
// console.log("text content->",body.textContent);


// update  -> property
// idPtTag.textContent = "I was update  by js"

// // styling -> 
// idPtTag.style.backgroundColor = "blue";
// idPtTag.style.color = "white";

// const idValue = idPtTag.getAttribute("id");
// console.log("idValue",idValue)

// delete 
// idPtTag.remove();

//creation

const liElem=document.createElement("li");
// add text , styling or properties
liElem.innerText="I am a task";

// select there parent
const ulArr=document.querySelectorAll(".list");

// // append to that 
ulArr[1].appendChild(liElem);





















