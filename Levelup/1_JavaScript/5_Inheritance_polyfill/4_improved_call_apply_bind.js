let cap = {
    name: "Steve",
    sayHi: function (avenger1, aveneger2) {
        console.log(this.name + " say's HI", aveneger2, avenger1);
    },
    sayHiMultiple: function (...args) {
        console.log(this.name + "say's Hi", ...args);
    }

}
const ironMan = {
    name: "tony"
}




// /*******************polyfill for mycall******************************/
Function.prototype.myCall = function (requiredObj, ...args) {
    console.log("my call invoked ");
    // console.log(this);
    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    const fnKey = Symbol('fnKey');
    requiredObj[fnKey] = requiredFn;
    // console.log("obj", requiredObj);
    requiredObj[fnKey](...args);
    // delete the added fn
    delete requiredObj.requiredFn
}

// 
// cap.sayHi.myCall(ironMan, "peter", "natsaha");
// ironMan.sayHi("peter","natasha");


Function.prototype.myApply = function (requiredObj, args) {
    // console.log("my Apply invoked ",args,...args)

    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    const fnKey = Symbol('fnKey');
    requiredObj[fnKey] = requiredFn;
    // console.log("obj", requiredObj);
    requiredObj[fnKey](...args);
    // delete the added fn
    delete requiredObj.requiredFn
}

// let peterTeamFN = cap.petersTeam;
// peterTeamFN.myApply(ironMan, ["loki", "thor"]);
// peterTeamFN.apply(ironMan,["loki","thor"]);

Function.prototype.myBind = function (reqObj) {
    const requiredFn = this
    return function (...args) {
        requiredFn.call(reqObj, ...args);
    }
}


// const boundFN=cap.sayHi.myBind(ironMan);
// boundFN("peter","natasha");

// const boundFN=cap.sayHi.bind(ironMan);
// boundFN("peter","natasha")











