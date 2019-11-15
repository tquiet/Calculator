let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    dotBtn = document.querySelector('.decimal'),
    c = document.querySelector('.clear'),
    display = document.querySelector('.display'),
    //Теперішній елемент введений в табло
    globalMemory = 0,
    //Введено нове число чи ні
    memoryNew = false,
    //Остання збережена інформація
    memoryOper = '';

// Лічильник для кожної цифри
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });

};

// Лічильник для кожної операції
for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};


dotBtn.addEventListener('click', function (event) {
    console.log('decimalBtn')
});

c.addEventListener('click', function (event) {
    // console.log('Clear')
});

function numberPress(number) {
    if (memoryNew) {
        display.value = number;
        memoryNew = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function operation(oper) {
    //Зберігаємо число яке було введено
    let localMemory = display.value;
    if (memoryNew && memoryOper !== '=') {
        display.value = globalMemory;
    } else {
        memoryNew = true;
        if (memoryOper === '+') {
            globalMemory += parseFloat(localMemory);
        } else if (memoryOper === '-') {
            globalMemory -= parseFloat(localMemory);
        } else if (memoryOper === '*') {
            globalMemory *= parseFloat(localMemory);
        } else if (memoryOper === '/') {
            globalMemory /= parseFloat(localMemory);
        } else {
            globalMemory = parseFloat(localMemory);
        };
        display.value = globalMemory;
        memoryOper = oper;
    }
    console.log('press ' + oper)
};

// function dot() {

// };

function clear() {
    display.value = 0;
    memoryNew = true;
    globalMemory = 0;
    memoryOper = 0;
    console.log('press clear')
};