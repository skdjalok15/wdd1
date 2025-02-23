// Array of products
const products = [
    {
        name: "Solar-Powered Lights",
        image: "images/solar-lights.jpg",
        description: "Save energy by using solar lights for outdoor spaces.",
        price: "$25"
    },
    {
        name: "Reusable Water Bottle",
        image: "images/water-bottle.jpg",
        description: "Reduce plastic waste by using a durable, refillable bottle.",
        price: "$15"
    },
    {
        name: "Bamboo Toothbrush",
        image: "images/bamboo-toothbrush.jpg",
        description: "Eco-friendly alternative to plastic toothbrushes.",
        price: "$5"
    },
    {
        name: "Compostable Plates",
        image: "images/compostable-plates.jpg",
        description: "Perfect for eco-friendly parties, fully biodegradable.",
        price: "$10"
    }
];

// Function to display products dynamically
function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear existing content

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button onclick="showDetails(${index})">View Details</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Function to show product details in an alert
function showDetails(index) {
    alert(`Product: ${products[index].name}\nPrice: ${products[index].price}\n\n${products[index].description}`);
}

// Load products when the page loads
document.addEventListener("DOMContentLoaded", displayProducts);


// **Quiz Section**
const quizQuestions = [
    {
        question: "Which of these materials is biodegradable?",
        options: ["Plastic", "Glass", "Bamboo", "Aluminum"],
        correct: "Bamboo"
    },
    {
        question: "What is the best way to reduce plastic waste?",
        options: ["Use more plastic", "Recycle only", "Use reusable items", "Burn plastic"],
        correct: "Use reusable items"
    },
    {
        question: "What energy source is renewable?",
        options: ["Coal", "Nuclear", "Solar", "Oil"],
        correct: "Solar"
    }
];

// Function to display quiz questions
function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("quiz-question");

        let optionsHtml = q.options.map(option => 
            `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label><br>`
        ).join("");

        questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>${optionsHtml}`;
        quizContainer.appendChild(questionDiv);
    });
}

// Function to check quiz answers
function checkQuizAnswers() {
    let score = 0;

    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption && selectedOption.value === q.correct) {
            score++;
        }
    });

    document.getElementById("quiz-result").textContent = `You got ${score} out of ${quizQuestions.length} correct! 🎉`;
}

// Load quiz when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    displayQuiz();

    document.getElementById("submit-quiz").addEventListener("click", checkQuizAnswers);
});
