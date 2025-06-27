// listentext18.js
// Đáp án True/False
const tf18Answers = ['F','T','T','T','T','F','F','F','F','T'];
// Đáp án điền từ
const fill18Answers = [
    'depressing', 'miserable', 'enomous', 'hallway', 'stone',
    'actually', 'darkness', 'corner', 'scared', 'through'
];

document.getElementById('submit-lt18-tf').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName('tf'+i);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === tf18Answers[i-1]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${tf18Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt18-tf-result').innerHTML = `<div class='score'>Your Score: ${score}/10</div>` + feedback;
};

document.getElementById('submit-lt18-fill').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= fill18Answers.length; i++) {
        const input = document.querySelector(`[name=f${i}]`);
        const userAns = (input.value || '').trim().toLowerCase();
        const correct = fill18Answers[i-1].toLowerCase();
        if (userAns === correct) {
            score++;
            input.style.borderColor = '#2ecc71';
            feedback += `<div>Blank ${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            input.style.borderColor = '#e74c3c';
            feedback += `<div>Blank ${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${fill18Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt18-fill-result').innerHTML = `<div class='score'>Your Score: ${score}/${fill18Answers.length}</div>` + feedback;
}; 