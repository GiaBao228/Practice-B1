// listentext7.js
const lt7Answers = {
    q1: 'D',
    q2: 'A',
    q3: 'D',
    q4: 'A',
    q5: 'C',
    q6: 'C',
    q7: 'B',
    q8: 'D',
    q9: 'A',
    q10: 'B'
};

document.getElementById('submit-lt7').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 10; i++) {
        const name = 'q' + i;
        const radios = document.getElementsByName(name);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === lt7Answers[name]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${lt7Answers[name]}</b>)</div>`;
        }
    }
    document.getElementById('lt7-result').innerHTML = `<div class='score'>Your Score: ${score}/10</div>` + feedback;
}; 