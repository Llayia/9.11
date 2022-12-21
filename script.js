let userMinValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let minValue = (userMinValue < -999) ? -999 : userMinValue || 0;

let userMaxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
let maxValue = (userMaxValue > 999) ? 999 : userMaxValue || 100;


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2); // округление в меньшую сторону
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;


const phraseRandom2 = Math.round( Math.random()* 3);
if (phraseRandom2 === 0) {
    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
} else if (phraseRandom2 === 1) {
    answerField.innerText = `Это ${answerNumber }?`;
} else if (phraseRandom2 === 2) {
    answerField.innerText = `Наверное, это число ${answerNumber }?`;
} else {
    answerField.innerText = `Ты загадал ${answerNumber }?`;
}



document.getElementById('btnRetry').addEventListener('click', function () { // Заново
    userMinValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    minValue = userMinValue || 0;
    
    userMaxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    maxValue = userMaxValue || 100;

    orderNumber = 1;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2); 
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    const phraseRandom2 = Math.round( Math.random()* 3);
    if (phraseRandom2 === 0) {
        answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
    } else if (phraseRandom2 === 1) {
        answerField.innerText = `Это ${answerNumber }?`;
    } else if (phraseRandom2 === 2) {
        answerField.innerText = `Наверное, это число ${answerNumber }?`;
    } else {
        answerField.innerText = `Ты загадал ${answerNumber }?`;
    }
  
})

document.getElementById('btnOver').addEventListener('click', function () { // Больше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           const phraseRandom2 = Math.round( Math.random()* 3);
            if (phraseRandom2 === 0) {
                answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
            } else if (phraseRandom2 === 1) {
                answerField.innerText = `Это ${answerNumber }?`;
            } else if (phraseRandom2 === 2) {
                answerField.innerText = `Наверное, это число ${answerNumber }?`;
            } else {
                answerField.innerText = `Ты загадал ${answerNumber }?`;
            }
            }
    }})


document.getElementById('btnLess').addEventListener('click', function () { // Меньше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else if (answerNumber < minValue + 1) {
            answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            gameRun = false;
            }else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom2 = Math.round( Math.random()* 3);
            if (phraseRandom2 === 0) {
                answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
            } else if (phraseRandom2 === 1) {
                answerField.innerText = `Это ${answerNumber }?`;
            } else if (phraseRandom2 === 2) {
                answerField.innerText = `Наверное, это число ${answerNumber }?`;
            } else {
                answerField.innerText = `Ты загадал ${answerNumber }?`;
            }
            }
        }})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom3 = Math.round( Math.random()* 3);
            if (phraseRandom3 === 0) {
                answerField.innerText = `Это было легко!`;
            } else if (phraseRandom3 === 1) {
                answerField.innerText = `Ура!`;
            } else if (phraseRandom3 === 2) {
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            }
        gameRun = false;
    }
})




///// перевод чисел в текст 
let answerNumber2

switch (answerNumber.toString()) {
    case '50':
      answerNumber2 = 'один1';
      console.log('проверка работы');  
      break;
    case '1':
      answerNumber2 = 'один';
      break;
    case '2':
      answerNumber2 = 'два';
      break;
    case '3':
      answerNumber2 = 'три';
      break;
    case '4':
      answerNumber2 = 'четыре';
      break;
    case '5':
      answerNumber2 = 'пять';
      break;
    default:
      answerNumber2 = answerNumber;
  }


/////
