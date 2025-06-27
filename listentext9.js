// listentext9.js
const lt9Answers = {
    q1: 'A',
    q2: 'C',
    q3: 'A',
    q4: 'D',
    q5: 'B',
    q6: 'D',
    q7: 'A',
    q8: 'C',
    q9: 'B',
    q10: 'C'
};

document.getElementById('submit-lt9').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 10; i++) {
        const name = 'q' + i;
        const radios = document.getElementsByName(name);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === lt9Answers[name]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${lt9Answers[name]}</b>)</div>`;
        }
    }
    document.getElementById('lt9-result').innerHTML = `<div class='score'>Your Score: ${score}/10</div>` + feedback;
}; 