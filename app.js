let currentStoryIndex = 0;

const storyTitleEl = document.getElementById("story-title");
const storyContentEl = document.getElementById("story-content");
const vocabContainerEl = document.getElementById("vocab-container");
const vocabListEl = document.getElementById("vocab-list");
const quizContainerEl = document.getElementById("quiz-container");
const quizQuestionsEl = document.getElementById("quiz-questions");
const quizResultEl = document.getElementById("quiz-result");

function loadStory(index) {
    const story = storiesData[index];
    storyTitleEl.textContent = story.title;
    storyContentEl.textContent = story.text;

    vocabListEl.innerHTML = "";
    story.vocabulary.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.es}</strong>: ${item.tr}`;
        vocabListEl.appendChild(li);
    });

    quizQuestionsEl.innerHTML = "";
    story.quiz.forEach((qObj, qIndex) => {
        const qDiv = document.createElement("div");
        qDiv.classList.add("quiz-question");
        qDiv.innerHTML = `<p>${qIndex + 1}. ${qObj.q}</p>`;
        
        const optDiv = document.createElement("div");
        optDiv.classList.add("quiz-options");
        
        qObj.options.forEach((opt, optIndex) => {
            optDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${qIndex}" value="${optIndex}"> ${opt}
                </label>
            `;
        });
        qDiv.appendChild(optDiv);
        quizQuestionsEl.appendChild(qDiv);
    });

    quizResultEl.textContent = "";
    vocabContainerEl.classList.add("hidden");
    quizContainerEl.classList.add("hidden");
}

document.getElementById("btn-refresh").addEventListener("click", () => {
    currentStoryIndex = (currentStoryIndex + 1) % storiesData.length;
    loadStory(currentStoryIndex);
});

document.getElementById("btn-toggle-vocab").addEventListener("click", () => {
    vocabContainerEl.classList.toggle("hidden");
});

document.getElementById("btn-toggle-quiz").addEventListener("click", () => {
    quizContainerEl.classList.toggle("hidden");
});

document.getElementById("btn-submit-quiz").addEventListener("click", () => {
    const story = storiesData[currentStoryIndex];
    let score = 0;

    story.quiz.forEach((qObj, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        if (selected && parseInt(selected.value) === qObj.answer) {
            score++;
        }
    });

    quizResultEl.textContent = `Test Sonucun: 10 soru üzerinden ${score} doğru!`;
    quizResultEl.style.color = score >= 7 ? "#2e7d32" : "#c62828";
});

loadStory(currentStoryIndex);
