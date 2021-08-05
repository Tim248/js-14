const arr = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 29 }
]

let result = arr.reduce((acc,item) => acc + item.age, 0) / (arr.length) ;
console.log(arr);
console.log(result);