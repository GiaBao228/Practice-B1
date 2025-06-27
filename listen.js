// listen.js
// --- True/False Answers ---
const tfAnswers = ['F','T','T','F','F','T','F','F','F','T'];

// --- Fill-in-the-Blank Answers ---
const fillAnswers = [
    'socialize', 'departments', 'accounting', 'touch', 'practial', 'definitely',
    'otherwise', 'apartment', 'whole', 'guess'
];

document.getElementById('submit-tf').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName('tf'+i);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === tfAnswers[i-1]) score++;
        feedback += `<div>Q${i}: ${userAns ? (userAns === tfAnswers[i-1] ? '<span style=\'color:#2ecc71\'>✓</span>' : '<span style=\'color:#e74c3c\'>✗</span>') : '<span style=\'color:#e67e22\'>No answer</span>'} (Correct: ${tfAnswers[i-1]})</div>`;
    }
    document.getElementById('tf-result').innerHTML = `<div class='score'>Your Score: ${score}/10</div>` + feedback;
};

document.getElementById('submit-fill').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= fillAnswers.length; i++) {
        const input = document.querySelector(`[name=f${i}]`);
        const userAns = (input.value || '').trim().toLowerCase();
        const correct = fillAnswers[i-1].toLowerCase();
        if (userAns === correct) {
            score++;
            input.style.borderColor = '#2ecc71';
            feedback += `<div>Blank ${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            input.style.borderColor = '#e74c3c';
            feedback += `<div>Blank ${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${fillAnswers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('fill-result').innerHTML = `<div class='score'>Your Score: ${score}/${fillAnswers.length}</div>` + feedback;
}; 