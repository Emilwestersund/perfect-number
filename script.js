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
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function setColorFromPicker() {
    const colorPicker = document.getElementById('color-picker');
    document.body.style.backgroundColor = colorPicker.value;
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.getElementById('red').value = red;
    document.getElementById('green').value = green;
    document.getElementById('blue').value = blue;
    setColor();
}

// Ny funksjon for å endre bakgrunnsfarge basert på tekstinput
function setColorFromTextInput() {
    const colorText = document.getElementById('colorTextInput').value;
    document.body.style.backgroundColor = colorText;
}
