// shadowing : in the current if you have a vriable then that variable will shadow the outer variable
// in that scope if the names are same 

// let fruits = "apple";
// console.log(fruits); 

// { 
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }



// let fruits = "apple";
// console.log(fruits); 

// {
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);




// var fruits = "apple";
// console.log(fruits); 

// {
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);



var fruits = "apple";
console.log("21", fruits);  //21 apple
{
    var  fruits;
    console.log("25", fruits); //25  apple
    fruits = "orange";
    {
        var fruits
        console.log("fruits name ", fruits)
    }
    console.log(fruits);// 29  orange
}
console.log(fruits); // orange



// //  illegal shadowing -> wrt to var that living through whole GEC -> tring to wrap it inside a block scope

// let fruits = "apple";
//  console.log(fruits); 

// {
//     var fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);