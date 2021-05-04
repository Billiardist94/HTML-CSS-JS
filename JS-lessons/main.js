// let firstName = prompt('Введите ваше имя: ');
// while (firstName === '') {
//     alert(`Поле не заполнено. Попробуйте снова.`)
//     firstName = prompt('Введите ваше имя: ');
// }
// let lastName = prompt('Введите фамилию');
// while (lastName === '') {
//     alert(`Поле не заполнено. Попробуйте снова.`)
//     lastName = prompt('Введите фамилию');
// }
// const patronymic = prompt('Введите ваше отчество: ');
// const fullName = `${lastName} ${firstName} ${patronymic}`;
// let age = prompt('Введите ваш возраст: ');
// while (age === '') {
//     alert(`Поле не заполнено. Попробуйте снова.`)
//     age = prompt('Введите ваш возраст: ');
// }
// while (isNaN(age)) {
//     alert(`Поле заполнено неверно. Попробуйте снова.`)
//     age = prompt('Введите ваш возраст: ');
// }
// const userGender = confirm('Ваш пол - мужской?');
// if (userGender) {
//     gender = 'мужской'
// } else{
//     gender = 'женский'}
// alert(`
// ${'Ваше ФИО:'} ${fullName}
// ${'Ваш возраст:'} ${age}
// ${'Ваш пол:'} ${gender}
// `);
//--------------------------------------------------------------------
// function getUserInfo(firstName, lastName, patronymic, age, gender) {
//     gender = gender ? 'мужской' : 'женский';
//     if ((firstName && lastName && patronymic && age) === '') {
//         alert('Поле не заполнено. Попробуйте еще раз.')
//         getUserInfo(
//             prompt('Введите ваше имя: '), 
//             prompt('Введите фамилию'), 
//             prompt('Введите ваше отчество: '), 
//             prompt('Введите ваш возраст: '), 
//             confirm('Ваш пол - мужской?')
//         );
//     }
//     else if (isNaN(age)) {
//         // console.log(age);
//         // console.log(typeof age);
//         alert('Значение введено неверно.')
//         Number.parseInt(age, 10);
//         // getUserInfo(
//         //     age=prompt('Введите ваш возраст: '), 
//         // );
//     }
//     alert(`
// ${'Ваше ФИО:'} ${firstName} ${lastName} ${patronymic}
// ${'Ваш возраст:'} ${age}
// ${'Ваш пол:'} ${gender}
// `);
// }
// const userInfo = getUserInfo
// userInfo(
//     prompt('Введите ваше имя: '), 
//     prompt('Введите фамилию'), 
//     prompt('Введите ваше отчество: '), 
//     prompt('Введите ваш возраст: '), 
//     confirm('Ваш пол - мужской?')
// );
//-------------------------------------------------------------------------
// const treeSum = function (arr){
//     const str = arr.toString().replace(/[\s.,%]/g, '');
//     return Array.from(str).reduce((total, curValue) => Number(total) + Number(curValue));
// }
// console.log(treeSum([ 5, 7, [[3,[3,[6]]]]]));
//-----------------------------------------------------------------------------
// const treeSum = function (arr) {
//     let total = 0;
    
//     let checkReplays = function (item) {
//         if (item instanceof Object && item.length >= 0) {
//             item.forEach(value => {
//                 total += (value);
//                 console.log(total);
//             })
//         }
//     }

//     let checkForArr = function (item) {
//         if (typeof item === 'number') {
//             total += item;
//         }
//     }

//     arr.forEach(item => {
//         checkReplays(item)
//         checkForArr(item)
//     })
    
//     console.log('Финальный total', total);
//     return total
// }
// console.log(treeSum([ 5, 7, [3, 8, [4]]]));
//-----------------------------------------------------------------------------
const str = 'А роза упала на лапу Азора';
const arr = str.split('')
const filteredArr = arr.filter(item => { 
    return !item.includes(' ')
})
console.log(filteredArr);
const revArr = filteredArr.reverse()
console.log(revArr);
const str1 = filteredArr.join('')
console.log(str1);
const str2 = arr.filter(item => { 
    return !item.includes(' ')
}).join('')
console.log(str2);
console.log(str1.toLowerCase === str2.toLowerCase);
















//-----------------------------------------------------------------------------
// const arr = [
//     {
//         name: 'numbers 1',
//         numbers: [1,3,5,'10', {
//             name: 'nestedNumbers1',
//             numbers: [1,6, true]
//         }]
//     },
//     {
//         name: 'numbers 2',
//         numbers: [2,4,6,'12', {
//             name: 'nestedNumbers2',
//             numbers: [1,6, true]
//         }]
//     }
// ]
// arr.forEach(item => {
//     console.log(item.numbers)
// })


