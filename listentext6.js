// listentext6.js
// Đáp án phần 1: Good/Bad và nơi xảy ra
const expAnswers = [
    { good: false, bad: true, where: 'at home (before the trip)' },
    { good: true, bad: false, where: 'at a crowded pub' },
    { good: true, bad: false, where: 'In California to the village' },
    { good: false, bad: true, where: 'On a train in Czech Republic' }
];

// Đáp án phần 2: điền từ
const fill6Answers = [
    'mailed', 'struck', 'process',
    'poet', 'suprisingly', 'poet',
    'ages', 'delicious',
    'Republic', 'conductor', 'border'
];

document.getElementById('submit-exp').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 4; i++) {
        const good = document.querySelector(`[name=exp${i}][value=Good]`).checked;
        const bad = document.querySelector(`[name=exp${i}][value=Bad]`).checked;
        const where = document.querySelector(`[name=where${i}]`).value.trim().toLowerCase();
        let correct = false;
        if (expAnswers[i-1].good && good && !bad) correct = true;
        if (expAnswers[i-1].bad && bad && !good) correct = true;
        if (correct) score++;
        let whereOk = where.includes(expAnswers[i-1].where.split('(')[0].toLowerCase().split(',')[0].trim());
        if (whereOk) score++;
        feedback += `<div>Row ${i}: ${correct ? '<span style=\'color:#2ecc71\'>✓</span>' : '<span style=\'color:#e74c3c\'>✗</span>'} (Good/Bad), ${whereOk ? '<span style=\'color:#2ecc71\'>✓</span>' : '<span style=\'color:#e74c3c\'>✗</span>'} (Where: ${expAnswers[i-1].where})</div>`;
    }
    document.getElementById('exp-result').innerHTML = `<div class='score'>Your Score: ${score}/8</div>` + feedback;
};

document.getElementById('submit-fill6').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= fill6Answers.length; i++) {
        const input = document.querySelector(`[name=f${i}]`);
        const userAns = (input.value || '').trim().toLowerCase();
        const correct = fill6Answers[i-1].toLowerCase();
        if (userAns === correct) {
            score++;
            input.style.borderColor = '#2ecc71';
            feedback += `<div>Blank ${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            input.style.borderColor = '#e74c3c';
            feedback += `<div>Blank ${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${fill6Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('fill6-result').innerHTML = `<div class='score'>Your Score: ${score}/${fill6Answers.length}</div>` + feedback;
}; 