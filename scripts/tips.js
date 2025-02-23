document.addEventListener("DOMContentLoaded", () => {
    const tips = [
        { text: "Reduce plastic use – Carry reusable bags.", image: "images/reusable-bags.jpg" },
        { text: "Conserve water – Turn off taps.", image: "images/water-saving.jpg" },
        { text: "Grow your own food.", image: "images/home-garden.jpg" },
        { text: "Use renewable energy.", image: "images/solar-panels.jpg" },
        { text: "Unplug unused devices.", image: "images/energy-saving.jpg" },
        { text: "Use public transport or cycle.", image: "images/bicycle.jpg" },
        { text: "Compost food waste.", image: "images/compost-bin.jpg" },
        { text: "Buy second-hand or sustainable products.", image: "images/eco-shopping.jpg" }
    ];

    // Random Tip Generator
    document.getElementById("random-tip-btn").addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        document.getElementById("random-tip").textContent = tips[randomIndex].text;
        document.getElementById("tip-image").src = tips[randomIndex].image;
    });

    // Quiz Section
    const quizData = [
        {
            question: "What is one way to reduce plastic waste?",
            options: ["Using single-use plastics", "Recycling more", "Buying more plastic items"],
            answer: "Recycling more"
        },
        {
            question: "Which energy source is renewable?",
            options: ["Coal", "Solar", "Gasoline"],
            answer: "Solar"
        }
    ];

    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz-container");
    const questionText = document.getElementById("question");
    const answersList = document.getElementById("answers-list");
    const submitAnswerBtn = document.getElementById("submit-answer");
    const quizResult = document.getElementById("quiz-result");

    function loadQuiz() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answersList.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const li = document.createElement("li");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "quiz-option";
            input.value = option;
            li.appendChild(input);
            li.appendChild(document.createTextNode(option));
            answersList.appendChild(li);
        });
    }

    submitAnswerBtn.addEventListener("click", () => {
        const selectedOption = document.querySelector("input[name='quiz-option']:checked");
        if (selectedOption) {
            const answer = selectedOption.value;
            const correctAnswer = quizData[currentQuestionIndex].answer;

            if (answer === correctAnswer) {
                quizResult.textContent = "Correct! Well done!";
            } else {
                quizResult.textContent = "Oops! Try again.";
            }
        } else {
            quizResult.textContent = "Please select an answer.";
        }
    });

    loadQuiz();
});

