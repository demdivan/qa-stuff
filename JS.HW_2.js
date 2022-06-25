// //1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// for (let i=1;i<=10;i++){
// console.log(2 ** i)
// }

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
//  let myFn = function(counter){               // counter - счетчик
//   for (let i=1;i<=counter;i++)
//  console.log(2 ** i)
//  }
// myFn(10)
   

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let smile = ':)'
// for (i=1;i<=5;i++){
// console.log(smile.repeat(i))}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
// function printSmile(stroka, numberOfRows){
// for (i=1;i<=numberOfRows;i++){
//   console.log(stroka.repeat(i))}
// }
//   printSmile(':)',5)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
    let vowels = 'aeiouy'.split('')    // Метод split разбивает строку на массив
    let counsonants = 'bcdfghjklmnprqrstvwxz'.split('')
    
    let vowelsCount = 0
    let counsonantsCount = 0

    for(const char of word.toLowerCase()) {             // toLowerCase()- приведение к нижнему регистру
        if(vowels.includes(char)) vowelsCount++
    else if (counsonants.includes(char)) counsonantsCount++
    }
console.log(`В слове ${word}:${vowelsCount} гласных и ${counsonantsCount} согласных букв`)
}
getWordStructure('Check-list')


//4** Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
word = word.toLowerCase()
    for(let i = 0,j=word.lenght-1;i<word.lenght, j>=0; i++, j--){
        if(word[i] !==word[j]){
            return false
        }
    }
    return true
}
console.log(isPalindrom('Abba'))

