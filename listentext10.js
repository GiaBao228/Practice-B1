// listentext10.js
const lt10Answers = {
    q1: 'C',
    q2: 'B',
    q3: 'A',
    q4: 'D',
    q5: 'A',
    q6: 'B',
    q7: 'D',
    q8: 'B',
    q9: 'D',
    q10: 'A'
};

document.getElementById('submit-lt10').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 10; i++) {
        const name = 'q' + i;
        const radios = document.getElementsByName(name);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === lt10Answers[name]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${lt10Answers[name]}</b>)</div>`;
        }
    }
    document.getElementById('lt10-result').innerHTML = `<div class='score'>Your Score: ${score}/10</div>` + feedback;
}; 