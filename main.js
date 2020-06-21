// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['super', 'w końcu', 'wyszło']

let time = 1;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    for (let i = 0; i < txt.length; i++) {
        setTimeout(() => {
            spnText.textContent = "";
            for (let j = 0; j < txt[i].length; j++) {
                setTimeout(() => {
                    spnText.textContent += txt[i][j];
                }, (j + 1) * 100)
            }
        }, (i + 1) * 2000);
    }
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);