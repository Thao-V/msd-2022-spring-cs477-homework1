let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}

Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);
}

// Array.prototype.odd = function () {
//     let res = [];
//     for(let n of this){
//         if(n % 2 === 1){
//             res.push(n)
//         }
//     }
//     return res;
// }

let temp = arr.even();
console.log(temp);

arr = [1, 2, 3, 4, 5, 6, 7, 8];
temp = arr.odd();
console.log(temp);

