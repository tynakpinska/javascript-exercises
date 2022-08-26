const removeFromArray = function(arr, ...items) {
    let newArr = [...arr];
    for (let i in items) {
        newArr = newArr.filter(a => a !== items[i]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
