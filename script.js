const elements = [
    { n: 1, s: 'H', e: 'Hydrogen' },
    { n: 2, s: 'He', e: 'Helium' },
    { n: 3, s: 'Li', e: 'Lithium' },
    { n: 4, s: 'Be', e: 'Beryllium' },
    { n: 5, s: 'B', e: 'Boron' },
    { n: 6, s: 'C', e: 'Carbon' },
    { n: 7, s: 'N', e: 'Nitrogen' },
    { n: 8, s: 'O', e: 'Oxygen' },
    { n: 9, s: 'F', e: 'Fluorine' },
    { n: 10, s: 'Ne', e: 'Neon' },
    { n: 11, s: 'Na', e: 'Sodium' },
    { n: 12, s: 'Mg', e: 'Magnesium' },
    { n: 13, s: 'Al', e: 'Aluminium' },
    { n: 14, s: 'Si', e: 'Silicon' },
    { n: 15, s: 'P', e: 'Phosphorus' },
    { n: 16, s: 'S', e: 'Sulfur' },
    { n: 17, s: 'Cl', e: 'Chlorine' },
    { n: 18, s: 'Ar', e: 'Argon' },
    { n: 19, s: 'K', e: 'Potassium' },
    { n: 20, s: 'Ca', e: 'Calcium' }
];

let currentQueue = [];
let currentElement = null;
let mistakes = JSON.parse(localStorage.getItem('elementMistakes')) || [];

function init() {
    updateStats();
    document.getElementById('answer-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkAnswer();
    });
}

function updateStats() {
    const stats = document.getElementById('stats');
    const reviewBtn = document.getElementById('review-btn');
    
    if (mistakes.length > 0) {
        stats.innerText = `Mistakes stored: ${mistakes.length}`;
        reviewBtn.disabled = false;
    } else {
        stats.innerText = "No mistakes recorded yet.";
        reviewBtn.disabled = true;
    }
}

function startGame(mode) {
    if (mode === '60') {
        currentQueue = elements.filter(e => e.n <= 60);
    } else if (mode === 'all') {
        currentQueue = [...elements];
    } else if (mode === 'review') {
        currentQueue = elements.filter(e => mistakes.includes(e.n));
    }

    if (currentQueue.length === 0) {
        alert("No elements to review!");
        return;
    }

    shuffle(currentQueue);
    
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');
    
    nextQuestion();
}

function nextQuestion() {
    if (currentQueue.length === 0) {
        alert("Session Complete!");
        returnToMenu();
        return;
    }

    const index = Math.floor(Math.random() * currentQueue.length);
    currentElement = currentQueue[index];
    
    document.getElementById('atomic-number').innerText = currentElement.n;
    document.getElementById('element-symbol').innerText = currentElement.s;
    document.getElementById('answer-input').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('answer-input').focus();
}

function checkAnswer() {
    const input = document.getElementById('answer-input').value.trim();
    const msg = document.getElementById('message');

    if (input.toLowerCase() === currentElement.e.toLowerCase()) {
        msg.innerText = "Correct!";
        msg.className = "correct";
        
        if (mistakes.includes(currentElement.n)) {
            mistakes = mistakes.filter(n => n !== currentElement.n);
            localStorage.setItem('elementMistakes', JSON.stringify(mistakes));
        }

        setTimeout(nextQuestion, 1000);
    } else {
        msg.innerText = `Wrong! It's ${currentElement.e}`;
        msg.className = "wrong";
        
        if (!mistakes.includes(currentElement.n)) {
            mistakes.push(currentElement.n);
            localStorage.setItem('elementMistakes', JSON.stringify(mistakes));
        }
    }
}

function returnToMenu() {
    document.getElementById('game').classList.remove('active');
    document.getElementById('menu').classList.add('active');
    updateStats();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

init();
