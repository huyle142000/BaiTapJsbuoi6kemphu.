var resultPInterger = document.getElementById('resultPInterger');
resultPInterger.addEventListener('click', () => {
    var output = 0;
    var i = 0;
    while (output < 10000) {
        output += i
        i++;
    }
    var positiveInteger = document.getElementById('positiveInteger');
    positiveInteger.innerHTML = `Số nguyên dương nhỏ nhất là: ${i - 1}`
})
//Bài Tập 2 :
var resultSum = document.getElementById('resultSum');
resultSum.addEventListener('click', () => {
    var takeX = Number(document.getElementById('takeX').value);
    var takeY = Number(document.getElementById('takeY').value);
    // output
    var output = 0;
    var i = 1;
    while (i <= takeY) {
        var sumPow = calcuPow(takeX, i);
        i++;
        output += sumPow;
    }
    function calcuPow(x, y) {
        var sum = Math.pow(x, y);
        return sum;
    }
    var showSum = document.getElementById('showSum');
    showSum.innerHTML = 'Tổng là : ' + output;
});


//BÀI TẬP 3 :
var factorial = document.getElementById('factorial');
factorial.addEventListener('click', () => {
    var takeFactorial = Number(document.getElementById('takeFactorial').value);
    // output
    var output = 1;
    var i = 1;
    while (i <= takeFactorial) {
        output *= i
        i++;
    }
    var resultFactorial = document.getElementById('resultFactorial');
    resultFactorial.innerHTML = 'Tổng là : ' + output;
});
//BÀI TẬP 4 :
var divBg = document.getElementById('divBg');
divBg.addEventListener('click', () => {
    // output
    var output = '';
    var i = 1;
    while (i <= 10) {
        if (i % 2 === 0) {
            var div = `<div class="bg-danger text-white">Div chan ${i}</div>`;
        } else {
            var div = `<div class="bg-primary text-white">Div le ${i}</div>`;
        }
        i++;
        output += div;
    }
    var resultdivBg = document.getElementById('resultdivBg');
    resultdivBg.innerHTML = output;
});

//BT5 phụ:
var primeNumber = document.getElementById('primeNumber');
primeNumber.addEventListener('click', () => {
    //input
    var prime = Number(document.getElementById('prime').value);
    // output
    var output = '';
    var resultprimeNumber = document.getElementById('resultprimeNumber');

    if (prime == '' || prime == 1 || prime == 0) {
        resultprimeNumber.innerHTML = alert('Bạn cần nhập dữ liệu và dữ liệu đó buộc phải lớn hơn hoặc bằng 2');
    };

    for (var i = 2; i <= prime; i++) {
        var checksss = checkPrime(i);
        if (checksss == true) {
            output += i + ' '
        }
    }
    resultprimeNumber.innerHTML = 'Số nguyên tố là : ' + output;
});
function checkPrime(value) {
    var check = true;
    var output = '';
    for (var i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) {
            check = false;
        }
    }
    return check;
}