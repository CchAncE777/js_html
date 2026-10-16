//map
//reduce
//filter

//for

let numbers = [1, 2, 3, 4]
let newNubmers = []
for (let i = 0; i < numbers.length; i++) {
    newNubmers.push(numbers[i] * 2)
}

console.log(newNubmers)

let newNumbers_2 = numbers.map(number => number * 2)
console.log(newNumbers_2)

let filter_numbers = numbers.filter(number => number % 2 === 0)
console.log(filter_numbers)

let newNumbers_3 = []

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
       newNumbers_3.push(numbers[i])
    }
}

console.log(newNumbers_3)

let sum = 0;

for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
}

console.log(sum)

let sum_reduce = numbers.reduce((summ, number) => summ + number, 0)
    
console.log(sum_reduce)
    
let max_number = numbers[0]

for (let i = 0; i < numbers.length; i++){
    if (max_number < numbers[i]) {
        max_number = numbers[i]
        }
    }

console.log(max_number)

numbers_max_2 = [1, 231, 1231, 1, 234, 231, 521]

let max = numbers_max_2.reduce((max, number) => {
    if (max < number){
        max = number
    }
    return max
}, numbers_max_2[0])

console.log(max)

let arr_str = ['asfwe', 'fenwegwe', 'fewfweubj', 'dd']
let arr_nb = []

for (let i = 0; i < arr_str.length; i++){
    arr_nb.push(arr_str[i].length)
}

console.log(arr_nb)

let arr_nb_2 = arr_str.map(str => str.length)

console.log(arr_nb_2)