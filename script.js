document.addEventListener("DOMContentLoaded", function () {
    // Sustainability Tips
    const tips = [
        "Reduce, reuse, recycle – minimize waste and extend product life.",
        "Choose eco-friendly products like bamboo toothbrushes and reusable bags.",
        "Support green businesses that prioritize sustainability.",
        "Conserve water by fixing leaks and using water-efficient appliances.",
        "Grow your own food to reduce carbon footprint."
    ];

    const tipsList = document.getElementById("tips-list");
    if (tipsList) {
        tips.forEach(tip => {
            let li = document.createElement("li");
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }

    // Quiz
    const quizData = {
        question: "What is the best way to reduce plastic waste?",
        options: ["Use reusable bags", "Throw plastic in trash", "Burn plastic"],
        correct: 0,
        image: "images/reusable-bags.jpg"
    };

    document.getElementById("question").textContent = quizData.question;
    ["option1", "option2", "option3"].forEach((id, index) => {
        let btn = document.getElementById(id);
        btn.textContent = quizData.options[index];
        btn.addEventListener("click", function () {
            if (index === quizData.correct) {
                document.getElementById("result").textContent = "Correct!";
                document.getElementById("quiz-image").src = quizData.image;
            } else {
                document.getElementById("result").textContent = "Try again!";
            }
        });
    });
});
