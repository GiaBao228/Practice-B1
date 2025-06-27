// listentext8.js
// Đáp án True/False
const tf8Answers = ['F','T','T','F','T'];
// Đáp án điền từ
const fill8Answers = [
    'tire', 'neither', 'wondering', 'roared', 'scared',
    'movies', 'guys', 'rough looking', 'terrified', 'judge'
];

document.getElementById('submit-lt8-tf').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 5; i++) {
        const radios = document.getElementsByName('tf'+i);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === tf8Answers[i-1]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${tf8Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt8-tf-result').innerHTML = `<div class='score'>Your Score: ${score}/5</div>` + feedback;
};

document.getElementById('submit-lt8-fill').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= fill8Answers.length; i++) {
        const input = document.querySelector(`[name=f${i}]`);
        const userAns = (input.value || '').trim().toLowerCase();
        const correct = fill8Answers[i-1].toLowerCase();
        if (userAns === correct) {
            score++;
            input.style.borderColor = '#2ecc71';
            feedback += `<div>Blank ${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            input.style.borderColor = '#e74c3c';
            feedback += `<div>Blank ${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${fill8Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt8-fill-result').innerHTML = `<div class='score'>Your Score: ${score}/${fill8Answers.length}</div>` + feedback;
}; 