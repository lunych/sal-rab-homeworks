function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    let message;

     message = productName;
     message += ' ';
     message += 'за';
     message += ' ';
     message += productPrice;
     message += ' ';
     message += 'теперь в корзине!';

     console.log(message);
     
 return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue = oldValue;
    newValue +=  1;

    // создайте переменную newValue
    // присвойте ей значение oldValue
    // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    let newSum;
    newSum = difference + oldSum;
    let newSumText = newSum + '₽';
    newSumText =`${newSum} ₽`;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

