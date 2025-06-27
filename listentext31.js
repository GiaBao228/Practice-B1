// listentext31.js
const lt31Answers = {
    q1: 'A',
    q2: 'C',
    q3: 'A',
    q4: 'B',
    q5: 'C'
};

document.getElementById('submit-lt31').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 5; i++) {
        const name = 'q' + i;
        const radios = document.getElementsByName(name);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === lt31Answers[name]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${lt31Answers[name]}</b>)</div>`;
        }
    }
    document.getElementById('lt31-result').innerHTML = `<div class='score'>Your Score: ${score}/5</div>` + feedback;
}; 