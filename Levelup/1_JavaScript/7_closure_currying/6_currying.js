

function counter(param) {
    let count = 1;
    if (param == 0) {
        return count;
    } else {
        return function inner(innerParam) {
            count++;
            if (innerParam == 0) {
                return count;
            } else {
                return inner;
            }
        }
    }
}





console.log(counter(0)); // print -> 1
console.log(counter()(0)); // print ->2
console.log(counter()()(0)); // print ->5
