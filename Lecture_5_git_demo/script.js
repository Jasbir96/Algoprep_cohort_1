function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
    randomArray.push(getRandomNumber(1, 100));
}


console.log("chnage done by me ")
console.log(randomArray);