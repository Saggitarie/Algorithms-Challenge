// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.

let arrayToList = (array) => {
    let list = []
    array.reverse() ;
    // list = array.map(el => {return {value: el, rest: list}})
    for (i = 0; i < array.length; i++){
        list[i+1] = list[i] ? {value: array[i], rest: list[i]} : {value: array[i], rest: null};
    }
    while (list.length > 1){list.shift()}
    return list
}

let listToArray = (list) => {
    // nullCheck = Object.entries(array[0]);
    // nullCheck1 = Object.entries(nullCheck[1][1]);
    // nullCheck2 = Object.entries(nullCheck1[1][1]);
    // arr = [];
    // arr[0] = nullCheck[0][1];
    // arr[1] = nullCheck1[0][1];
    // arr[2] = nullCheck2[0][1];
    // return arr
    // let objEntries = Object.entries(array[0]);
    let values = []
    let retrieveValue = (obj) => {
        if (!obj){
            return
        }
        // Convert object to array of [key, value] pairs
        obj = Object.entries(obj);
        let value = obj.shift();
        values.push(value[1]);
        // obj = [['rest', {value, rest obj} ]]. Below returns the inner array (first element).
        obj = obj.shift();
        // obj = ['rest', { value, rest obj }]. Below returns last element.
        obj = obj.pop();
        // Recursion to access values and nested rest objects
        retrieveValue(obj);
    }
    retrieveValue(list[0]);
    return values;
}

let prepend = (value, rest) => {return list = {value: value, rest: rest}}

console.log(arrayToList([10, 20, 30]));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20