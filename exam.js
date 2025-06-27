// exam.js
// --- Utility ---
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- MULTIPLE CHOICE & PICTURE QUIZ ---
const mcQuestions = shuffle(questions.multiple_choice).slice(0, 20);
const pqQuestions = shuffle(questions.picture_quiz).slice(0, 10);

// --- READING ---
const readingBlocks = [
  {
    passage: `<h3>TEXT 22: Read the passage carefully and choose the correct answer among A, B, C, or D.</h3><p>After inventing dynamite, Swedish-born Alfred Nobel became a very rich man. However, he foresaw its universally destructive powers too late. Nobel preferred not to be remembered as the inventor of dynamite, so in 1895, just two weeks before his death, he created a fund to be used for awarding prizes to people who had made worthwhile contributions to humanity. Originally there were five awards: literature, physics, chemistry, medicine, and peace. Economics was added in 1968, just sixty-seven years after the first awards ceremony.</p><p>Nobel's original legacy of nine million dollars was invested, and the interest on this sum is used for the awards which vary from $30,000 to $125,000.</p><p>Every year on December 10, the anniversary of Nobel's death, the awards (gold medal, illuminated diploma, and money) are presented to the winners. Sometimes politics plays an important role in the judges' decisions. Americans have won numerous science awards, but relatively few literature prizes.</p><p>No awards were presented from 1940 to 1942 at the beginning of World War II. Some people have won two prizes, but this is rare; others have shared their prizes.</p>`,
    questions: [
      { name: 'q1', text: '1. In how many fields are prizes bestowed?', options: ['A. 6', 'B. 5', 'C. 2', 'D. 10'] },
      { name: 'q2', text: '2. All of the following statements are true EXCEPT...', options: ['A. Alfred Nobel became a very rich man.', 'B. politics plays an important role in selecting the winners', 'C. a few individuals have won two awards', 'D. awards vary in monetary value'] },
      { name: 'q3', text: '3. How much money did Nobel leave for the prizes?', options: ['A. $9,000,000', 'B. $155,000', 'C. $125,000', 'D. $30,000'] },
      { name: 'q4', text: '4. The Nobel prize was established in order to...', options: ['A. fund scientific research', 'B. spend money', 'C. resolve political differences', 'D. honour the inventor of dynamite'] },
      { name: 'q5', text: '5. What is the main idea of this passage?', options: ['A. Alfred Nobel created awards in six categories for contributions to humanity.', 'B. Alfred Nobel left all of his money to science.', 'C. Alfred Nobel became very rich when he invented dynamite.', 'D. Alfred Nobel made a lasting contribution to humanity.'] }
    ],
    answers: { q1: 'A', q2: 'A', q3: 'A', q4: 'A', q5: 'D' }
  },
  {
    passage: `<h3>TEXT 23: Read the passage carefully and choose the correct answer among A, B, C, or D.</h3><p>Carbon dating can be used to estimate the age of any organic natural material; It has been used successfully in archeology to determine the age of ancient artifacts or fossils as well as in a variety of other fields. The principle underlying the use of carbon dating is that carbon is a part of all living things on Earth. Since a radioactive substance such as carbon-14 has a known half-life, the amount of carbon-14 remaining in an object can be used to date that object.</p><p>Carbon-14 has a half-life of 5,570 years, which means that after that number of years, half of the carbon-14 atoms have decayed into nitrogen-14. It is the ratio of carbon-14 to nitrogen-14 in that substance that indicates the age of the substance. If, for example, in a particular sample the amount of carbon-14 is roughly equivalent to the amount of nitrogen-14, this indicates that around half of the carbon-14 has decayed into nitrogen-14, and the sample is approximately 5,570 years old.</p><p>Carbon dating cannot be used effectively in dating objects that are older than 80,000 years. When objects are that old, much of the carbon-14 has already decayed into nitrogen-14, and the minuscule amount that is left doesn't provide a reliable measurement of age. In the case of older objects, other age-dating methods are available, methods which use radioactive atoms with longer half-lives than carbon has.</p>`,
    questions: [
      { name: 'q6', text: '6. This passage is mainly about', options: ['A. the differences between carbon-14 and nitrogen-14', 'B. one method of dating old objects', 'C. archeology and the study of ancient artifacts', 'D. various uses for carbon'] },
      { name: 'q7', text: '7. The pronoun "it" in line 1 refers to', options: ['A. any organic natural material', 'B. the age', 'C. carbon dating', 'D. archeology'] },
      { name: 'q8', text: '8. Which of the following is NOT true about carbon-14?', options: ['A. It is radioactive.', 'B. Its half-life is more than 5,000 years.', 'C. It can decay into nitrogen-14.', 'D. It and nitrogen always exist in equal amounts in any substance.'] },
      { name: 'q9', text: '9. It can be inferred from the passage that if an item contains more carbon-14 than nitrogen-14, then the item is', options: ['A. too old to be age-dated with carbon-14', 'B. too radioactive to be used by archeologists', 'C. not as much as 5,570 years old', 'D. more than 5,570 years old'] },
      { name: 'q10', text: '10. It is implied in the passage that', options: ['A. carbon dating could not be used on an item containing nitrogen', 'B. carbon-14 does not have the longest known half-life', 'C. fossils cannot be age-dated using carbon-14', 'D. carbon dating has no known uses outside of archeology'] }
    ],
    answers: { q6: 'B', q7: 'C', q8: 'D', q9: 'C', q10: 'B' }
  },
  {
    passage: `<h3>TEXT 24: Read the passage carefully and choose the correct answer among A, B, C, or D.</h3><p>Ancient people made clay pottery because they needed it for their survival. They used the pots they made for cooking, storing food, and carrying things from place to place. Pottery was so important to early cultures that scientists now study it to learn more about ancient civilizations. The more advanced the pottery in terms of decoration, materials, glazes and manufacture, the more advanced the culture itself.</p><p>The artisan who makes pottery in North America today utilizes his or her skill and imagination to create items that are beautiful as well as functional, transforming something ordinary into something special and unique.</p><p>The potter uses one of the Earth's most basic materials, clay. Clay can be found almost everywhere. Good pottery clay must be free from all small stones and other hard materials that would make the potting process difficult. Most North American artisan-potters now purchase commercially processed clay, but some find the clay they need right in the earth, close to where they work. The most important tools potters use are their own hand; however, they also use wire loop tools, wooden modeling tools, plain wire, and sponges. Plain wire is used to cut away the finished pot from its base on the potter's wheel.</p><p>After a finished pot is dried of all its moisture in the open air, it is placed in a kiln and fired. The first firing hardens the pottery, and it is then ready to be glazed and fired again. For areas where they do not want any glaze, such as the bottom of the pot, artisans paint on melted wax that will later burn off in the kiln. They then pour on the liquid glaze and let it run over the clay surface, making any kind of decorative pattern that they want.</p>`,
    questions: [
      { name: 'q11', text: '11. It can be inferred from the passage that clay is processed commercially in order to...', options: ['A. make it easier to color', 'B. remove hard substances', 'C. prevent the glaze from sticking', 'D. make it dry more evenly'] },
      { name: 'q12', text: '12. What does the passage mainly discuss?', options: ['A. Different kinds of clay', 'B. Crafts of ancient civilizations', 'C. The making of pottery', 'D. The training of an artisan'] },
      { name: 'q13', text: '13. According to the passage, which of the following can be learned about an ancient civilization by examining its pottery?', options: ['A. Its population', 'B. Its developmental stage', 'C. Its geographic location', 'D. Its food preferences'] },
      { name: 'q14', text: '14. According to the passage, how do most North American potters today get the clay they need?', options: ['A. They buy it', 'B. They barter for it', 'C. They dig it from the earth', 'D. They make it'] },
      { name: 'q15', text: '15. According to the author, what do potters use to remove the pot from the wheel?', options: ['A. A sponge', 'B. Melted wax', 'C. A wire loop', 'D. Plain wire'] }
    ],
    answers: { q11: 'B', q12: 'C', q13: 'B', q14: 'A', q15: 'D' }
  },
  {
    passage: `<h3>TEXT 25: Read the passage carefully and choose the correct answer among A, B, C, or D.</h3><p>The Moon has been worshipped by primitive peoples and has inspired humans to create everything from lunar calendars to love sonnets, but what do we really know about it? The most accepted theory about the origin of the Moon is that it was formed of the debris from a massive collision with the young Earth about 4.6 billion years ago. A huge body, perhaps the size of Mars, struck the Earth, throwing out an immense amount of debris that coalesced and cooled in orbit around the Earth.</p><p>The development of Earth is inextricably linked to the moon; the Moon's gravitational influence upon the Earth is the primary cause of ocean tides. In fact, the Moon has more than twice the effect upon the tides than the Sun does. The Moon makes one rotation and completes a revolution around the Earth every 27 days, 7 hours, and 43 minutes. This synchronous rotation is caused by an uneven distribution of mass in the Moon (essentially, it is heavier on one side than the other) and has allowed the Earth's gravity to keep one side of the Moon permanently facing Earth. It is an average distance from Earth of 384,403 km.</p><p>The Moon has no atmosphere; without an atmosphere, the Moon has nothing to protect it from meteorite impacts, and thus the surface of the Moon is covered with impact craters, both large and small. The Moon also has no active tectonic or volcanic activity, so the erosive effects of atmospheric weathering, tectonic shifts, and volcanic upheavals that tend to erase and reform the Earth's surface features are not at work on the Moon. In fact, even tiny surface features such as the footprint left by an astronaut in the lunar soil are likely to last for millions of years, unless obliterated by a chance meteorite strike. The surface gravity of the Moon is about one-sixth that of the Earth's. Therefore, a man weighing 82 kilograms on Earth would only weigh 14 kilograms on the Moon. The Moon is very unlike either Hawaii or Arizona, however; in fact, the temperature on the Moon ranges between 123 degrees C. to -233 degrees C.</p>`,
    questions: [
      { name: 'q16', text: '16. A person on the Moon would weigh less than on the Earth because...', options: ['A. the Moon has no active tectonic or volcanic activity', 'B. the surface gravity of the Moon is less than that of the Earth's', 'C. of the composition of lunar soil', 'D. the Moon has no atmosphere'] },
      { name: 'q17', text: '17. According to the passage, the Moon is...', options: ['A. protected by a dense atmosphere', 'B. composed of a few active volcanoes', 'C. older than the Earth', 'D. the primary cause of Earth's ocean tides'] },
      { name: 'q18', text: '18. Which of the following can be inferred from the passage?', options: ['A. The Moon is not able to support human life', 'B. People living in Hawaii and Arizona would feel at home on the Moon', 'C. If the Moon had no gravitational influence, the Earth would not have tides', 'D. Mars could have been formed in a similar way to the Moon'] },
      { name: 'q19', text: '19. All of the following are true about the Moon EXCEPT...', options: ['A. it has a wide range of temperatures', 'B. it is unable to protect itself from meteorite attacks', 'C. it has less effect upon the tides than the Sun', 'D. it is heavier on one side than the other'] },
      { name: 'q20', text: '20. What is the passage primarily about?', options: ['A. The Moon\'s effect upon the Earth', 'B. A comparison of the Moon and the Earth', 'C. The origin of the Moon', 'D. What we know about the Moon and its differences to Earth'] },
    ],
    answers: { q16: 'B', q17: 'D', q18: 'A', q19: 'C', q20: 'D' }
  }
];

const selectedReading = shuffle(readingBlocks).slice(0, 1)[0];

// --- CLOZE ---
const clozeBlocks = [
  // TEXT 7
  {
    passage: `<h3>TEXT 7: Fill in each numbered blank with one suitable word or phrase.</h3><h2>CAVE PAINTINGS IN AUSTRALIA</h2><p>A cave containing over 200 paintings was discovered in the Wollemi National Park, Australia, eight years ago. Some of the paintings are (<span class="blank">1</span>) least 3,000 years old. (<span class="blank">2</span>) is even more surprising is that the cave was found by chance by someone walking in the area. However, the site of the cave was so difficult to reach that it (<span class="blank">3</span>) a long time before researchers could visit it. The exact location of the site has to be (<span class="blank">4</span>) secret. This is to (<span class="blank">5</span>) the cave from being visited by sightseers who do not (<span class="blank">6</span>) how easy it is to (<span class="blank">7</span>) the paintings. The paintings show people and animals, (<span class="blank">8</span>) birds, lizards, and other Australian animals that which can (<span class="blank">9</span>) be seen today. According to researchers, (<span class="blank">10</span>) its recent discovery, nobody had visited the cave for around since200 years.</p>`,
    questions: [
      { name: 'q7_1', options: ['A. in', 'B. of', 'C. to', 'D. at'] },
      { name: 'q7_2', options: ['A. How', 'B. What', 'C. Why', 'D. Which'] },
      { name: 'q7_3', options: ['A. lasted', 'B. spent', 'C. took', 'D. finished'] },
      { name: 'q7_4', options: ['A. remained', 'B. set', 'C. controlled', 'D. kept'] },
      { name: 'q7_5', options: ['A. prevent', 'B. miss', 'C. escape', 'D. avoid'] },
      { name: 'q7_6', options: ['A. catch', 'B. realize', 'C. dream', 'D. feel'] },
      { name: 'q7_7', options: ['A. waste', 'B. injure', 'C. damage', 'D. upset'] },
      { name: 'q7_8', options: ['A. detail', 'B. adding', 'C. including', 'D. consisting'] },
      { name: 'q7_9', options: ['A. yet', 'B. already', 'C. ever', 'D. still'] },
      { name: 'q7_10', options: ['A. by', 'B. after', 'C. until', 'D. on'] }
    ],
    answers: { q7_1: 'D', q7_2: 'B', q7_3: 'C', q7_4: 'D', q7_5: 'A', q7_6: 'B', q7_7: 'C', q7_8: 'C', q7_9: 'D', q7_10: 'C' }
  },
  // TEXT 8
  {
    passage: `<h3>TEXT 8: Fill in each numbered blank with one suitable word or phrase.</h3><h2>THE DRIEST PLACE ON EARTH</h2><p>The Atacama Desert in Chile is known as the driest place on Earth. It is almost 2,000 kilometers (<span class="blank">1</span>) length, lying between the Pacific Ocean and the Andes mountains. Under a centimeter of rain (<span class="blank">2</span>) annually, and the center is so dry (<span class="blank">3</span>) scientists have never recorded (<span class="blank">4</span>) rain there. Over a million people (<span class="blank">5</span>) live in the Atacama today. Most live on the coast, which is also home to teams of astronomers who are there to (<span class="blank">6</span>) advantage of the clear skies. In the north, farmers grow tomatoes with water that they have collected from underground rocks. However, for those who have their farms on higher ground, the water comes from melting snow. People generally seem to (<span class="blank">7</span>) knowledge about what the desert has to offer, but in (<span class="blank">8</span>) the desert has, there is plenty to do - from seeing the amazing natural sights to playing golf, one of the more recent activities (<span class="blank">9</span>) tourists to the region.</p>`,
    questions: [
      { name: 'q8_1', options: ['A. by', 'B. at', 'C. to', 'D. in'] },
      { name: 'q8_2', options: ['A. pours', 'B. falls', 'C. sinks', 'D. lowers'] },
      { name: 'q8_3', options: ['A. as', 'B. that', 'C. when', 'D. than'] },
      { name: 'q8_4', options: ['A. any', 'B. no', 'C. some', 'D. little'] },
      { name: 'q8_5', options: ['A. totally', 'B. exactly', 'C. actually', 'D. finally'] },
      { name: 'q8_6', options: ['A. have', 'B. make', 'C. get', 'D. take'] },
      { name: 'q8_7', options: ['A. those', 'B. these', 'C. them', 'D. they'] },
      { name: 'q8_8', options: ['A. fail', 'B. lose', 'C. miss', 'D. lack'] },
      { name: 'q8_9', options: ['A. case', 'B. turn', 'C. fact', 'D. time'] },
      { name: 'q8_10', options: ['A. arriving', 'B. attracting', 'C. approaching', 'D. arranging'] }
    ],
    answers: { q8_1: 'D', q8_2: 'B', q8_3: 'B', q8_4: 'A', q8_5: 'C', q8_6: 'D', q8_7: 'A', q8_8: 'D', q8_9: 'C', q8_10: 'B' }
  }
];

const selectedCloze = shuffle(clozeBlocks).slice(0, 1)[0];

// --- WRITING ---
const writingQuestions = shuffle(window.writeQuestions || []).slice(0, 10);

// Render Multiple Choice
function renderMultipleChoice() {
  const container = document.getElementById('multiple-choice');
  mcQuestions.forEach((q, idx) => {
    let html = `<div class="question"><p><b>MC${idx + 1}.</b> ${q.question}</p>`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="mc${idx}" value="${opt}"> ${opt}</label>`;
    });
    html += '</div>';
    container.innerHTML += html;
  });
}

// Render Picture Quiz
function renderPictureQuiz() {
  const container = document.getElementById('picture-quiz');
  pqQuestions.forEach((q, idx) => {
    let html = `<div class="question"><p><b>PQ${idx + 1}.</b> ${q.question}</p>`;
    html += `<img src="${q.image}" alt="Question image" style="max-width:200px;display:block;margin:10px auto;">`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="pq${idx}" value="${opt}"> ${opt}</label>`;
    });
    html += '</div>';
    container.innerHTML += html;
  });
}

// Render Reading
function renderReading() {
  const container = document.getElementById('reading');
  let html = `<div class="passage"><p>${selectedReading.passage}</p></div>`;
  selectedReading.questions.forEach(q => {
    html += `<div class="question"><p><b>${q.text}</b></p>`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="${q.name}" value="${opt[0]}"> ${opt}</label>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

// Render Cloze
function renderCloze() {
  const container = document.getElementById('cloze');
  let html = `<div class="passage"><p>${selectedCloze.passage}</p></div>`;
  selectedCloze.questions.forEach(q => {
    html += `<div class="question"><p><b>${q.text}</b></p>`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="${q.name}" value="${opt[0]}"> ${opt}</label>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

// Render Writing
function renderWriting() {
  const container = document.getElementById('writing');
  writingQuestions.forEach((q, idx) => {
    let html = `<div class="question"><p><b>W${idx + 1}.</b> ${q.original}</p>`;
    html += `<div class="answer-section"><span class="start-phrase">${q.start}</span> <input type="text" class="answer-input" id="w${idx}"></div>`;
    html += `<div class="keyword">${q.keyword}</div>`;
    html += '</div>';
    container.innerHTML += html;
  });
}

// Submit Exam
function submitExam() {
  let score = 0, total = 0;
  // Multiple Choice
  mcQuestions.forEach((q, idx) => {
    total++;
    const radios = document.getElementsByName(`mc${idx}`);
    let userAns = '';
    radios.forEach(r => { if (r.checked) userAns = r.value; });
    if (userAns === q.answer) score++;
  });
  // Picture Quiz
  pqQuestions.forEach((q, idx) => {
    total++;
    const radios = document.getElementsByName(`pq${idx}`);
    let userAns = '';
    radios.forEach(r => { if (r.checked) userAns = r.value; });
    if (userAns === q.answer) score++;
  });
  // Reading
  Object.entries(selectedReading.answers).forEach(([name, ans]) => {
    total++;
    const radios = document.getElementsByName(name);
    let userAns = '';
    radios.forEach(r => { if (r.checked) userAns = r.value; });
    if (userAns === ans) score++;
  });
  // Cloze
  Object.entries(selectedCloze.answers).forEach(([name, ans]) => {
    total++;
    const radios = document.getElementsByName(name);
    let userAns = '';
    radios.forEach(r => { if (r.checked) userAns = r.value; });
    if (userAns === ans) score++;
  });
  // Writing
  writingQuestions.forEach((q, idx) => {
    total++;
    const userAns = document.getElementById(`w${idx}`).value.trim().toLowerCase();
    if (userAns === q.answer.toLowerCase()) score++;
  });
  document.getElementById('exam-result').innerHTML = `<div class="score">Your Score: ${score} / ${total}</div>
    <div style="font-size: 0.8em; margin-top: 10px; text-align: center;">
      ${score === total ? 'Perfect! 🎉' : 'Keep practicing! 💪'}
    </div>`;
}

// Render all on load
window.onload = function() {
  renderMultipleChoice();
  renderPictureQuiz();
  renderReading();
  renderCloze();
  renderWriting();
}; 