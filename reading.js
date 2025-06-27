const correctAnswers = {
    q1: "A",
    q2: "A",
    q3: "A",
    q4: "A",
    q5: "D",
    q6:"B",
    q7:"C",
    q8:"D",
    q9:"C",
    q10:"B",
    q11:"B",
    q12:"C",
    q13:"B",
    q14:"A",
    q15:"D",
    q16:"B",
    q17:"D",
    q18:"A",
    q19:"C",
    q20:"D",
};

function checkAnswers() {
    let score = 0;
    let feedback = '';

    for (let i = 1; i <= 20; i++) {
        const questionName = `q${i}`;
        const radios = document.getElementsByName(questionName);
        let userAnswer = '';
        
        radios.forEach(radio => {
            if (radio.checked) {
                userAnswer = radio.value;
                // Thêm màu cho câu trả lời
                radio.parentElement.style.color = radio.value === correctAnswers[questionName] ? '#2ecc71' : '#e74c3c';
                radio.parentElement.style.fontWeight = 'bold';
            }
            // Đánh dấu câu trả lời đúng
            if (radio.value === correctAnswers[questionName]) {
                radio.parentElement.style.color = '#2ecc71';
            }
        });

        if (userAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `
        <div>Your Score: ${score} / 20</div>
        <div style="font-size: 0.8em; margin-top: 10px;">
            ${score === 20 ? 'Perfect! 🎉' : 'Keep practicing! 💪'}
        </div>
    `;
}