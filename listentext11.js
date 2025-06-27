// listentext11.js
// Đáp án True/False
const tf11Answers = ['T','F','F','T','T','F'];
// Đáp án điền từ
const fill11Answers = [
    'literature', 'art', 'neighborhood', 'favorite', 'touch',
    'without', 'tragic', 'familiar', 'unusual', 'opposite'
];

document.getElementById('submit-lt11-tf').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= 6; i++) {
        const radios = document.getElementsByName('tf'+i);
        let userAns = '';
        radios.forEach(r => { if (r.checked) userAns = r.value; });
        if (userAns === tf11Answers[i-1]) {
            score++;
            feedback += `<div>Q${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            feedback += `<div>Q${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${tf11Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt11-tf-result').innerHTML = `<div class='score'>Your Score: ${score}/6</div>` + feedback;
};

document.getElementById('submit-lt11-fill').onclick = function() {
    let score = 0;
    let feedback = '';
    for (let i = 1; i <= fill11Answers.length; i++) {
        const input = document.querySelector(`[name=f${i}]`);
        const userAns = (input.value || '').trim().toLowerCase();
        const correct = fill11Answers[i-1].toLowerCase();
        if (userAns === correct) {
            score++;
            input.style.borderColor = '#2ecc71';
            feedback += `<div>Blank ${i}: <span style='color:#2ecc71'>✓</span></div>`;
        } else {
            input.style.borderColor = '#e74c3c';
            feedback += `<div>Blank ${i}: <span style='color:#e74c3c'>✗</span> (Correct: <b>${fill11Answers[i-1]}</b>)</div>`;
        }
    }
    document.getElementById('lt11-fill-result').innerHTML = `<div class='score'>Your Score: ${score}/${fill11Answers.length}</div>` + feedback;
}; 