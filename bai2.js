let lineNumber = Number(prompt("Nhập số dòng để in ra hình tam giác:"));

function numberOneTriangle(lineNumber) {
    while (isNaN(lineNumber) == true || lineNumber < 1 || lineNumber > 10) {
        lineNumber = Number(prompt('Hãy nhập lại!'));
    }
    for (let i = 0; i < lineNumber; i++) {
        let s = '';
        for (let j = 0; j <= i; j++) {
            s = s + '*';
        }
        console.log(s);
    }
}

numberOneTriangle(lineNumber);