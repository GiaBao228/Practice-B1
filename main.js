// Function to shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Generate quiz when page loads
window.onload = function() {
  const quizDiv = document.getElementById("quiz");

  // Hiển thị toàn bộ câu hỏi theo thứ tự
  const selected = [
    ...questions.multiple_choice,
    ...questions.picture_quiz
  ];

  selected.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";

    // Add question type as a small label
    const questionType = Object.keys(questions).find(key => 
      questions[key].some(item => item === q)
    ).replace(/_/g, ' ');

    qDiv.innerHTML = `
      <p><b>Question ${index + 1}</b> <small>(${questionType})</small></p>
      <p>${q.question}</p>
    `;

    if (q.image) {
      qDiv.innerHTML += `<img src="${q.image}" alt="Question image"/>`;
    }

    q.options.forEach((opt, optIndex) => {
      qDiv.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opt}">
          ${opt}
        </label>
      `;
    });

    quizDiv.appendChild(qDiv);
  });

  window.generatedQuiz = selected;
};

function submitQuiz() {
  let score = 0;
  const result = document.getElementById("result");
  
  window.generatedQuiz.forEach((q, index) => {
    const radios = document.getElementsByName(`q${index}`);
    let userAns = "";
    radios.forEach(r => { 
      if (r.checked) userAns = r.value;
      // Add color to the selected answer's label
      if (r.checked) {
        r.parentElement.style.color = r.value === q.answer ? '#2ecc71' : '#e74c3c';
        r.parentElement.style.fontWeight = 'bold';
      }
      // Highlight correct answer
      if (r.value === q.answer) {
        r.parentElement.style.color = '#2ecc71';
      }
    });
    
    // Add feedback message for wrong answers
    const questionDiv = radios[0].closest('.question');
    if (userAns !== q.answer) {
      const feedback = document.createElement('p');
      feedback.innerHTML = `<span style="color: #e74c3c">✗ Your answer: ${userAns}</span><br>
                           <span style="color: #2ecc71">✓ Correct answer: ${q.answer}</span>`;
      feedback.style.marginTop = '10px';
      questionDiv.appendChild(feedback);
    } else {
      const feedback = document.createElement('p');
      feedback.innerHTML = `<span style="color: #2ecc71">✓ Correct!</span>`;
      feedback.style.marginTop = '10px';
      questionDiv.appendChild(feedback);
    }
    
    if (userAns === q.answer) score++;
  });

  result.innerHTML = `
    <div>Your Score: ${score} / ${window.generatedQuiz.length}</div>
    <div style="font-size: 0.8em; margin-top: 10px;">
      ${score === window.generatedQuiz.length ? 'Perfect! 🎉' : 'Keep practicing! 💪'}
    </div>
  `;
}
