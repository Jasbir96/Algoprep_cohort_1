let cap = {
    name: "Steve",
    sayHi: function (avenger1, aveneger2) {
        console.log(this.name + " say's HI", aveneger2, avenger1);
    },
    sayHiMultiple: function (...args) {
        console.log(this.name + "say's Hi", ...args);
    }

}
// cap.sayHi("av1", "av2");


// bind call and apply

const ironMan = {
    name: "tony"
}

// used to create a copy of a function with a bound this
// const borrowSayHi = cap.sayHi.bind(ironMan);
// borrowSayHi("Peter", "Bruce");
// borrowSayHi("Natsaha", "Strange");

//call -> you directly call a fuction with a this 
// cap.sayHi.call(ironMan,"peter","natsaha");


// //  apply
// cap.sayHi.apply(ironMan, ["peter", "natsaha"]);
// cap.sayHiMultiple.apply(ironMan,["one","two"])




