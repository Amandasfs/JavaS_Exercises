function uniqueElementes(array){
    let unique = new Set(array);
    return[...unique];
}
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElementes(arr));