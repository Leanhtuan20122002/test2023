function check() {
    let a = Number(prompt('Nhập số a'));
    let b = Number(prompt('Nhập số b'));
let n = [];
let sum = 0;
while ((isNaN(a) == true) || (a < 0)) {
    a = Number(prompt('Hãy nhập lại số a!'));
}
while ((isNaN(b) == true) || (b < 0)) {
    b = Number(prompt('Hãy nhập lại số b!'));
}
if (a > b || a == b) {
    alert('Nhập a và b thoả mãn điều kiện a < b');
} else {
    for (let i = a; i <= b; i++) {
        check=true;
        for (let x = 2; x < i-1; x++) {
            if (i % x == 0) {
                check=false;
            } 
        }
        if( check==true) {
            console.log(i);
            n.push(i);
        }
    }
}

for (let i = 0; i < n.length; i++) {
    sum += n[i];
}

console.log('Dãy các số nguyên tố: ' + n);
console.log('Tổng: ' + sum);

}
check();

