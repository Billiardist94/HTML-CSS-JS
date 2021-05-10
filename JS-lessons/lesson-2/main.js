//__________________6.random numbers__________________
// const getRandomNumbers = function (n) {
//     const arr = [];
//     while (arr.length < n) {
//         let rand = Math.random();
//         let randCeil = Math.ceil(rand * 10)
//         if (arr.includes(randCeil)) {
//             continue
//         } else {
//             arr.push(randCeil)
//         }
//     }
//     return arr
// }
// console.log(getRandomNumbers(10))
//__________________5.guess the number__________________
// const guessNumber = function () {
//     const arr = [];
//     let rand = Math.random();
//     let randCeil = Math.ceil(rand * 10)
//     while (arr.length < 3) {
//         arr.push(randCeil)
//     }
//     console.log(arr); // проверка 
//     for (let i = 0; i < arr.length; i++) {
//         let check = parseInt(prompt('Enter a number: '))
//         if (arr[i] === check) {
//             alert('You\'re right!');
//             break
//         } else {
//             if (i < 2) {
//                 alert('You\'re wrong!')
//             } else {
//                 alert('You lose!')
//             }
//         }
//     }
// }
// console.log(guessNumber())
//__________________3.valid HTML string__________________
// const sampleDataForHTML = [
//     {
//         type: "div",
//         value: "some div value"
//     },
//     {
//         type: "div",
//         value: {
//             type: "span",
//             value: {
//                 type: "span",
//                 value: "last span value"
//             }
//         }
//     },
//     {
//         type: "p",
//         value: "some p value"
//     }
// ];
// let str = JSON.stringify(sampleDataForHTML);
// let newStr = str.replace(/(type)|("value":)|(\[)|(\])|(\}+)|(\{+)|([:,."])/gm, '')
// let divStr = newStr.replace(/(div\B)/gm, '<div>')
// let spanStr = divStr.replace(/(span\B)/gm, '<span>')
// console.log(spanStr)