const input = prompt('Enter a number 1: ');
const input2 = prompt('Enter a number 2: ');

if (input.trim() !== '' && input2.trim() !== ''){
    console.log('Обидва поля заповнені');
    alert('Обидва поля заповнені')
} else {
    alert('Не всі поля заповнені')
}

let sum1 = 5;
let sum2 = 5;
let sumof = sum1 + sum2;

if (sumof <= 10){
alert("менша або дорівнює 10")
} else {
alert("більша за 10")
}

let jsTest = prompt('Enter a text: ');
if (jsTest.includes("JavaScript")){
    alert("Текст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}

let sumTest = prompt('Enter a number 3: ');
sumTest = Number(sumTest);
if (sumTest > 10 && sumTest < 20){
    alert("Число входить в діапазон від 10 до 20")
    console.log(sumTest);
    
} else {
    alert("Число не входить в діапазон від 10 до 20")
} 

userName = prompt('Enter your name: ');
userEmail = prompt('Enter your email: ');
userPassword = prompt('Enter your password: ');
if (userName.length > 3 && userEmail.includes('@') && userPassword.length > 6){
    alert("Ви успішно зареєстровані")
} else {
    alert("Помилка реєстрації")
}