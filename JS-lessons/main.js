const firstName = prompt('Введите ваше имя: ');
function userLastName(value) {
    return value;
}
const lastName = userLastName(prompt('Введите фамилию'));
if (lastName === '') {
    alert(`Поле не заполнено. Попробуйте снова.`)
    userLastName(prompt('Введите фамилию'));
}
const patronymic = prompt('Введите ваше отчество: ');
const fullName = `${lastName} ${firstName} ${patronymic}`;
const age = prompt('Введите ваш возраст: ');
const userGender = confirm('Ваш пол - мужской?');
if (userGender) {
    gender = 'мужской'
} else{
    gender = 'женский'}
alert(`
${'Ваше ФИО:'} ${fullName}
${'Ваш возраст:'} ${age}
${'Ваш пол:'} ${gender}
`);
//--------------------------------------------------------------------
// function getUserInfo(firstName, lastName, patronymic, age, gender) {
//     gender = (gender) ? 'мужской' : 'женский';
//     if ((firstName && lastName && patronymic && age) === '') {
//         alert('Поле не заполнено. Попробуйте еще раз.')
//         getUserInfo(prompt('Введите ваше имя: '), prompt('Введите фамилию'), prompt('Введите ваше отчество: '), prompt('Введите ваш возраст: '), confirm('Ваш пол - мужской?'))
//     }
//     alert(`
// ${'Ваше ФИО:'} ${firstName} ${lastName} ${patronymic}
// ${'Ваш возраст:'} ${age}
// ${'Ваш пол:'} ${gender}
// `);
// }
// const userInfo = getUserInfo
// userInfo(prompt('Введите ваше имя: '), prompt('Введите фамилию'), prompt('Введите ваше отчество: '), prompt('Введите ваш возраст: '), confirm('Ваш пол - мужской?'))
//--------------------------------------------------------------------
// //-------firstName-------
// const getFirstName = function (firstName) {
//     return firstName
// }
// const userFirstName = getFirstName(prompt('Введите имя: '))
// //-------lastName-------
// const getLastName = function (lastName) {
//     return lastName
// }
// const userLastName = getLastName
// //-------patronymic-------
// const getPatronymic = function (patronymic) {
//     return patronymic
// }
// const userPatronymic = getPatronymic
// //-------age-------
// const getAge = function (age) {
//     return age
// }
// const userAge = getAge
// //-------gender-------
// const getGender = function (gender) {
//     return gender
// }
// const userGender = getGender
// //-------alert-------
// alert(`
// ${'Ваше ФИО:'} ${userFirstName} ${userLastName(prompt('Введите фамилию: '))} ${userPatronymic(prompt('Введите отчество: '))}
// ${'Ваш возраст:'} ${userAge(prompt('Введите возраст: '))}
// ${'Ваш пол:'} ${userGender(confirm('Ваш пол - мужской?'))}
// `);
//-------------------------------------------------------------------------
// const treeSum = function (arr){
//     const str = arr.toString().replace(/[\s.,%]/g, '');
//     return Array.from(str).reduce((total, curValue) => Number(total) + Number(curValue));
// }
// console.log(treeSum([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]));
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









