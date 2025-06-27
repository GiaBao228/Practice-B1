const correctAnswers = {
    q5_1: "C",
    q5_2: "B",
    q5_3: "D",
    q5_4:"A",
    q5_5:"B",
    q5_6:"C",
    q5_7:"D",
    q5_8:"B",
    q5_9:"C",
    q5_10:"C",
    q6_1: "C",
    q6_2: "A",
    q6_3: "C",
    q6_4:"A",
    q6_5:"B",
    q6_6:"B",
    q6_7:"D",
    q6_8:"A",
    q6_9:"D",
    q6_10:"C",
    q7_1: "D",
    q7_2: "B",
    q7_3: "C",
    q7_4:"D",
    q7_5:"A",
    q7_6:"B",
    q7_7:"C",
    q7_8:"C",
    q7_9:"D",
    q7_10:"C",
    q8_1: "D",
    q8_2: "B",
    q8_3: "B",
    q8_4:"A",
    q8_5:"C",
    q8_6:"D",
    q8_7:"A",
    q8_8:"D",
    q8_9:"C",
    q8_10:"B", 
};

function checkAnswers() {
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    
    Object.keys(correctAnswers).forEach(questionName => {
        const radios = document.getElementsByName(questionName);
        let userAnswer = '';
        radios.forEach(radio => {
            if (radio.checked) {
                userAnswer = radio.value;
                radio.parentElement.style.color = radio.value === correctAnswers[questionName] ? '#2ecc71' : '#e74c3c';
                radio.parentElement.style.fontWeight = 'bold';
            }
            if (radio.value === correctAnswers[questionName]) {
                radio.parentElement.style.color = '#2ecc71';
            }
        });
        if (userAnswer === correctAnswers[questionName]) {
            score++;
        }
    });

    const result = document.getElementById('result');
    result.innerHTML = `
        <div>Your Score: ${score} / ${total}</div>
        <div style="font-size: 0.8em; margin-top: 10px;">
            ${score === total ? 'Perfect! 🎉' : 'Keep practicing! 💪'}
        </div>
    `;
}