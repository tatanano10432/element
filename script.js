/* Full 118 Elements Data */
const allElements = [
    { n: 1, s: 'H', e: 'Hydrogen' }, { n: 2, s: 'He', e: 'Helium' },
    { n: 3, s: 'Li', e: 'Lithium' }, { n: 4, s: 'Be', e: 'Beryllium' },
    { n: 5, s: 'B', e: 'Boron' }, { n: 6, s: 'C', e: 'Carbon' },
    { n: 7, s: 'N', e: 'Nitrogen' }, { n: 8, s: 'O', e: 'Oxygen' },
    { n: 9, s: 'F', e: 'Fluorine' }, { n: 10, s: 'Ne', e: 'Neon' },
    { n: 11, s: 'Na', e: 'Sodium' }, { n: 12, s: 'Mg', e: 'Magnesium' },
    { n: 13, s: 'Al', e: 'Aluminium' }, { n: 14, s: 'Si', e: 'Silicon' },
    { n: 15, s: 'P', e: 'Phosphorus' }, { n: 16, s: 'S', e: 'Sulfur' },
    { n: 17, s: 'Cl', e: 'Chlorine' }, { n: 18, s: 'Ar', e: 'Argon' },
    { n: 19, s: 'K', e: 'Potassium' }, { n: 20, s: 'Ca', e: 'Calcium' },
    { n: 21, s: 'Sc', e: 'Scandium' }, { n: 22, s: 'Ti', e: 'Titanium' },
    { n: 23, s: 'V', e: 'Vanadium' }, { n: 24, s: 'Cr', e: 'Chromium' },
    { n: 25, s: 'Mn', e: 'Manganese' }, { n: 26, s: 'Fe', e: 'Iron' },
    { n: 27, s: 'Co', e: 'Cobalt' }, { n: 28, s: 'Ni', e: 'Nickel' },
    { n: 29, s: 'Cu', e: 'Copper' }, { n: 30, s: 'Zn', e: 'Zinc' },
    { n: 31, s: 'Ga', e: 'Gallium' }, { n: 32, s: 'Ge', e: 'Germanium' },
    { n: 33, s: 'As', e: 'Arsenic' }, { n: 34, s: 'Se', e: 'Selenium' },
    { n: 35, s: 'Br', e: 'Bromine' }, { n: 36, s: 'Kr', e: 'Krypton' },
    { n: 37, s: 'Rb', e: 'Rubidium' }, { n: 38, s: 'Sr', e: 'Strontium' },
    { n: 39, s: 'Y', e: 'Yttrium' }, { n: 40, s: 'Zr', e: 'Zirconium' },
    { n: 41, s: 'Nb', e: 'Niobium' }, { n: 42, s: 'Mo', e: 'Molybdenum' },
    { n: 43, s: 'Tc', e: 'Technetium' }, { n: 44, s: 'Ru', e: 'Ruthenium' },
    { n: 45, s: 'Rh', e: 'Rhodium' }, { n: 46, s: 'Pd', e: 'Palladium' },
    { n: 47, s: 'Ag', e: 'Silver' }, { n: 48, s: 'Cd', e: 'Cadmium' },
    { n: 49, s: 'In', e: 'Indium' }, { n: 50, s: 'Sn', e: 'Tin' },
    { n: 51, s: 'Sb', e: 'Antimony' }, { n: 52, s: 'Te', e: 'Tellurium' },
    { n: 53, s: 'I', e: 'Iodine' }, { n: 54, s: 'Xe', e: 'Xenon' },
    { n: 55, s: 'Cs', e: 'Caesium' }, { n: 56, s: 'Ba', e: 'Barium' },
    { n: 57, s: 'La', e: 'Lanthanum' }, { n: 58, s: 'Ce', e: 'Cerium' },
    { n: 59, s: 'Pr', e: 'Praseodymium' }, { n: 60, s: 'Nd', e: 'Neodymium' },
    { n: 61, s: 'Pm', e: 'Promethium' }, { n: 62, s: 'Sm', e: 'Samarium' },
    { n: 63, s: 'Eu', e: 'Europium' }, { n: 64, s: 'Gd', e: 'Gadolinium' },
    { n: 65, s: 'Tb', e: 'Terbium' }, { n: 66, s: 'Dy', e: 'Dysprosium' },
    { n: 67, s: 'Ho', e: 'Holmium' }, { n: 68, s: 'Er', e: 'Erbium' },
    { n: 69, s: 'Tm', e: 'Thulium' }, { n: 70, s: 'Yb', e: 'Ytterbium' },
    { n: 71, s: 'Lu', e: 'Lutetium' }, { n: 72, s: 'Hf', e: 'Hafnium' },
    { n: 73, s: 'Ta', e: 'Tantalum' }, { n: 74, s: 'W', e: 'Tungsten' },
    { n: 75, s: 'Re', e: 'Rhenium' }, { n: 76, s: 'Os', e: 'Osmium' },
    { n: 77, s: 'Ir', e: 'Iridium' }, { n: 78, s: 'Pt', e: 'Platinum' },
    { n: 79, s: 'Au', e: 'Gold' }, { n: 80, s: 'Hg', e: 'Mercury' },
    { n: 81, s: 'Tl', e: 'Thallium' }, { n: 82, s: 'Pb', e: 'Lead' },
    { n: 83, s: 'Bi', e: 'Bismuth' }, { n: 84, s: 'Po', e: 'Polonium' },
    { n: 85, s: 'At', e: 'Astatine' }, { n: 86, s: 'Rn', e: 'Radon' },
    { n: 87, s: 'Fr', e: 'Francium' }, { n: 88, s: 'Ra', e: 'Radium' },
    { n: 89, s: 'Ac', e: 'Actinium' }, { n: 90, s: 'Th', e: 'Thorium' },
    { n: 91, s: 'Pa', e: 'Protactinium' }, { n: 92, s: 'U', e: 'Uranium' },
    { n: 93, s: 'Np', e: 'Neptunium' }, { n: 94, s: 'Pu', e: 'Plutonium' },
    { n: 95, s: 'Am', e: 'Americium' }, { n: 96, s: 'Cm', e: 'Curium' },
    { n: 97, s: 'Bk', e: 'Berkelium' }, { n: 98, s: 'Cf', e: 'Californium' },
    { n: 99, s: 'Es', e: 'Einsteinium' }, { n: 100, s: 'Fm', e: 'Fermium' },
    { n: 101, s: 'Md', e: 'Mendelevium' }, { n: 102, s: 'No', e: 'Nobelium' },
    { n: 103, s: 'Lr', e: 'Lawrencium' }, { n: 104, s: 'Rf', e: 'Rutherfordium' },
    { n: 105, s: 'Db', e: 'Dubnium' }, { n: 106, s: 'Sg', e: 'Seaborgium' },
    { n: 107, s: 'Bh', e: 'Bohrium' }, { n: 108, s: 'Hs', e: 'Hassium' },
    { n: 109, s: 'Mt', e: 'Meitnerium' }, { n: 110, s: 'Ds', e: 'Darmstadtium' },
    { n: 111, s: 'Rg', e: 'Roentgenium' }, { n: 112, s: 'Cn', e: 'Copernicium' },
    { n: 113, s: 'Nh', e: 'Nihonium' }, { n: 114, s: 'Fl', e: 'Flerovium' },
    { n: 115, s: 'Mc', e: 'Moscovium' }, { n: 116, s: 'Lv', e: 'Livermorium' },
    { n: 117, s: 'Ts', e: 'Tennessine' }, { n: 118, s: 'Og', e: 'Oganesson' }
];

/* App State */
let currentRange = '60';
let gameQueue = [];
let currentIndex = 0;
let currentElement = null;
let mistakes = JSON.parse(localStorage.getItem('elementMistakes')) || [];

/* Initialization */
function init() {
    updateStatsDisplay();
    // Enable Enter key for quiz
    document.getElementById('quiz-input').addEventListener('keypress', function(e) {
        if(e.key === 'Enter') checkAnswer();
    });
}

function updateStatsDisplay() {
    const el = document.getElementById('stats-display');
    if (mistakes.length > 0) {
        el.innerText = `⚠️ ${mistakes.length} mistakes saved for review`;
    } else {
        el.innerText = `Ready to learn`;
    }
}

/* Range Selection */
function setRange(range, btnElement) {
    currentRange = range;
    
    // UI Toggle
    document.querySelectorAll('.segment').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
}

/* Game Logic */
function startMode(mode) {
    // 1. Prepare Data
    if (currentRange === '60') {
        gameQueue = allElements.filter(e => e.n <= 60);
    } else if (currentRange === 'all') {
        gameQueue = [...allElements];
    } else if (currentRange === 'mistakes') {
        gameQueue = allElements.filter(e => mistakes.includes(e.n));
        if (gameQueue.length === 0) {
            alert("No mistakes recorded yet! Good job.");
            return;
        }
    }

    // Shuffle
    gameQueue.sort(() => Math.random() - 0.5);
    currentIndex = 0;

    // 2. Switch Screen
    document.getElementById('menu-screen').classList.remove('active');
    
    if (mode === 'study') {
        document.getElementById('study-screen').classList.add('active');
        loadStudyCard();
    } else {
        document.getElementById('quiz-screen').classList.add('active');
        loadQuizCard();
    }
}

function goHome() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menu-screen').classList.add('active');
    updateStatsDisplay();
}

/* Study Mode Logic */
function loadStudyCard() {
    if (currentIndex >= gameQueue.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = gameQueue.length - 1;

    currentElement = gameQueue[currentIndex];
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped'); // Reset flip

    // Update Content with small delay to hide transition if needed, but immediate is fine
    setTimeout(() => {
        document.getElementById('study-num').innerText = currentElement.n;
        document.getElementById('study-sym').innerText = currentElement.s;
        document.getElementById('study-name').innerText = currentElement.e;
        document.getElementById('study-progress').innerText = `${currentIndex + 1} / ${gameQueue.length}`;
    }, 200);
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard(direction) {
    currentIndex += direction;
    loadStudyCard();
}

/* Quiz Mode Logic */
function loadQuizCard() {
    if (currentIndex >= gameQueue.length) {
        alert(`Quiz Complete! Returning to menu.`);
        goHome();
        return;
    }

    currentElement = gameQueue[currentIndex];
    document.getElementById('quiz-num').innerText = currentElement.n;
    document.getElementById('quiz-sym').innerText = currentElement.s;
    document.getElementById('quiz-input').value = '';
    document.getElementById('quiz-progress').innerText = `Progress: ${currentIndex + 1} / ${gameQueue.length}`;
    
    const feedback = document.getElementById('quiz-feedback');
    feedback.innerText = '';
    feedback.className = 'feedback';
    
    document.getElementById('quiz-input').focus();
}

function checkAnswer() {
    const input = document.getElementById('quiz-input').value.trim();
    const feedback = document.getElementById('quiz-feedback');
    const correctName = currentElement.e;

    if (input.toLowerCase() === correctName.toLowerCase()) {
        feedback.innerText = "Correct! " + correctName;
        feedback.className = 'feedback correct';
        
        // Remove from mistakes if correct
        if (mistakes.includes(currentElement.n)) {
            mistakes = mistakes.filter(n => n !== currentElement.n);
            localStorage.setItem('elementMistakes', JSON.stringify(mistakes));
        }

        setTimeout(() => {
            currentIndex++;
            loadQuizCard();
        }, 1000);
    } else {
        feedback.innerText = `Wrong! It's ${correctName}`;
        feedback.className = 'feedback wrong';
        
        // Add to mistakes
        if (!mistakes.includes(currentElement.n)) {
            mistakes.push(currentElement.n);
            localStorage.setItem('elementMistakes', JSON.stringify(mistakes));
        }
    }
}

// Start
init();
