function isPerfectNumber(n) {
    if (n <= 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n;
}

function checkNumber() {
    const num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        alert("Skriv inn et tall!");
        return;
    }
    if (isPerfectNumber(num)) {
        alert(`${num} er et perfekt nummer`);
    } else {
        alert(`${num} er ikke et perfekt nummer`);
    }
}

function randomNumber() {
    const num = Math.floor(Math.random() * 10000) + 1;
    document.getElementById('numberInput').value = num;
}

function setColor() {
    const r = document.getElementById('red').value;
    const g = document.getElementById('green').value;
    const b = document.getElementById('blue').value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    
    document.getElementById('red').value = r;
    document.getElementById('green').value = g;
    document.getElementById('blue').value = b;
    

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
