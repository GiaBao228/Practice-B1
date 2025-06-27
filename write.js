const questions = [
    {
        original: "I am not strong enough to climb that steep path without a walking stick.",
        start: "That path is",
        keyword: "(too)",
        answer: "That path is too steep for me to climb without a walking stick"
    },
    {
        original: "That man stole a valuable picture but he was never punished.",
        start: "That man",
        keyword: "(got)",
        answer: "That man got away with steading a valuable picture"
    },
    {
        original: "Hitch-hiking is less popular now than ten years ago.",
        start: "Hitch-hiking is",
        keyword: "(not)",
        answer: "Hitch-hiking is not so popular as it was ten years ago"
    },
    {
        original: '"Why did you cancel the party, Lucy?" Martin asked.',
        start: "Martin asked Lucy",
        keyword: "(called)",
        answer: "Martin asked Lucy why she had called off the party"
    },
    {
        original: '"Do not leave your belongings unattended," the group leader said to the tourists.',
        start: "The group leader told the tourists",
        keyword: "(to)",
        answer: "The group leader told the tourists not to leave their belongings unattended."
    },
    {
        original: "Mrs. Green didn't buy her son a bicycle because she didn't have enough money.",
        start: "Mrs. Green",
        keyword: "(afford)",
        answer: "Mrs. Green couldn’t afford to buy her son a bicycle."
    },
    {
        original: "He will not buy that pony because he is no longer interested.",
        start: "He",
        keyword: "(lost)",
        answer: "He has lost interest in buying that pony."
    },
    {
        original: "Although it looks easy, that dance is actually quite difficult.",
        start: "That dance is",
        keyword: "(not)",
        answer: "That dance is not as easy as it looks"
    },
    {
        original: "Mark did as I suggested and bought a new computer.",
        start: "Mark",
        keyword: "(advice)",
        answer: "Mark took my advice and bought a new computer."
    },
    {
        original: "No teacher will tolerate bad behavior in class.",
        start: "No teacher will",
        keyword: "(put)",
        answer: "No teacher will put up with bad behavior in class."
    },
    {
        "original": "Nigel asked if Ann could lend him her hairdryer for a while.",
        "start": "Nigel asked",
        "keyword": "(borrow)",
        "answer": "Nigel asked if he could borrow Ann’s hairdryer for a while."
    },
    {
        "original": "Chris is hungry because the last time he ate something was Thursday evening.",
        "start": "Chris is hungry because he",
        "keyword": "(not)",
        "answer": " Chris is hungry because he hasn’t eaten anything since Thursday evening."
    },
    {
        "original": "We will not be able to solve this difficult problem.",
        "start": "It will be",
        "keyword": "(impossible)",
        "answer": "It will be impossible for us to solve this difficult problem."
    },
    {
        "original": "Peter is angry because Joanna did not accept his invitation.",
        "start": "If Joanna",
        "keyword": "(turn)",
        "answer": "If Joanna had not turned down , Peter’s invitation he wouldn’t be angry."
    },
    {
        "original": "I don't think I can manage if my sister doesn't help me.",
        "start": "I think I can't",
        "keyword": "(do)",
        "answer": " I think I can’t do it without my sister’s help."
    },
    {
        "original": "\"Have you finished your homework yet?\" Mr. Brown asked his daughter.",
        "start": "Mr. Brown asked his daughter",
        "keyword": "(if)",
        "answer": " Mr. Brown asked his daughter if she had finished her homework yet."
    },
    {
        "original": "\"Do we have to pay for our own tickets?\" I asked my friend.",
        "start": "I asked my friend",
        "keyword": "(expected)",
        "answer": "I asked my friend if we were expected to pay for our own tickets."
    },
    {
        "original": "The strong winds caused the tower to fall over.",
        "start": "It was the strong winds",
        "keyword": "(knocked)",
        "answer": " It was the strong winds that knocked the tower over."
    },
    {
        "original": "The bus driver stopped frequently to allow the tourists to see the sights.",
        "start": "The bus driver stopped frequently",
        "keyword": "(that)",
        "answer": "The bus driver stopped frequently so that the tourists could see the sights."
    },
    {
        "original": "Jane held Tom's hand and prevented him from falling over.",
        "start": "Tom would have fallen over",
        "keyword": "(had)",
        "answer": "Tom would have fallen over if Jane hadn’t held his hand."
    },
    {
        "original": "I only found out about my exam results when I returned from my holiday.",
        "start": "Not until",
        "keyword": "(told)",
        "answer": "Not until I returned from my holiday was I told about my exam results."
    },
    {
        "original": "It was her determination which enabled her to get better so quickly.",
        "start": "If",
        "keyword": "",
        "answer": "If she had not been so determined, she wouldn’t have able to better quickly."
    },
    {
        "original": "His chances of qualifying as a doctor are small.",
        "start": "It is not",
        "keyword": "",
        "answer": " It is not likely that he will qualify as a doctor."
    },
    {
        "original": "It took a long time for the patient to recover completely from his illness.",
        "start": "Only after",
        "keyword": "",
        "answer": "Only after a long time did the patient recover completely from his illness."
    },
    {
        "original": "Jane doesn't take any exercise, which is why she is unfit.",
        "start": "Jane's unfitness",
        "keyword": "",
        "answer": "Jane’s unfitness is due to the fact that she doesn’t take any exercise"
    }
];

window.onload = function() {
    const questionsDiv = document.getElementById('questions');
    
    questions.forEach((q, index) => {
        const questionHtml = `
            <div class="writing-question">
                <p class="question-number">${index + 1}.</p>
                <p class="original-sentence">${q.original}</p>
                <p class="keyword">${q.keyword}</p>
                <div class="answer-section">
                    <span class="start-phrase">${q.start}</span>
                    <input type="text" class="answer-input" id="answer${index}" placeholder="Complete the sentence...">
                </div>
                <div id="feedback${index}" class="answer-feedback"></div>
            </div>
        `;
        questionsDiv.innerHTML += questionHtml;
    });
};

function checkAnswers() {
    let score = 0;
    const result = document.getElementById('result');

    questions.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        const correctAnswer = q.answer.toLowerCase();
        const answerInput = document.getElementById(`answer${index}`);
        const feedbackDiv = document.getElementById(`feedback${index}`);
        
        if (userAnswer === correctAnswer) {
            score++;
            answerInput.style.borderColor = '#2ecc71';
            feedbackDiv.innerHTML = `<p style="color: #2ecc71; margin-top: 10px;">✓ Correct!</p>`;
        } else {
            answerInput.style.borderColor = '#e74c3c';
            feedbackDiv.innerHTML = `
                <div style="margin-top: 10px;">
                    <p style="color: #e74c3c">✗ Incorrect</p>
                    <p style="color: #2c3e50; margin-top: 5px;">Correct answer:</p>
                    <p style="color: #2ecc71; font-weight: bold;">${q.start} ${q.answer.substring(q.start.length)}</p>
                </div>
            `;
        }
    });

    result.innerHTML = `
        <div class="score">Your Score: ${score}/${questions.length}</div>
        <div style="font-size: 0.8em; margin-top: 10px; text-align: center;">
            ${score === questions.length ? 'Perfect! 🎉' : 'Keep practicing! 💪'}
        </div>
    `;
}