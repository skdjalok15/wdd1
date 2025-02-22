// Dynamic Tip Toggle Functionality
document.getElementById('toggleBtn').addEventListener('click', function() {
  const tipsSection = document.getElementById('tips-section');
  const isVisible = tipsSection.style.display === 'block';
  tipsSection.style.display = isVisible ? 'none' : 'block';
  this.textContent = isVisible ? 'Show More Tips' : 'Show Less Tips';
  this.setAttribute('aria-expanded', !isVisible);
});

// Populate Eco-Friendly Products List Dynamically
const products = [
  { name: 'Reusable Water Bottle', description: 'Stay hydrated, reduce plastic waste.' },
  { name: 'Bamboo Toothbrush', description: 'Eco-friendly alternative to plastic.' },
  { name: 'Compostable Plates', description: 'Perfect for eco-friendly parties.' }
];

const productList = document.getElementById('productList');
products.forEach(product => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
  productList.appendChild(li);
});

// Quiz Functionality
const quizData = [
  {
    question: "What is an eco-friendly alternative to plastic straws?",
    options: ["Glass", "Bamboo", "Metal", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "What can you do to reduce single-use plastic waste?",
    options: ["Use reusable bags", "Buy plastic bottles", "Use disposable cutlery", "None of the above"],
    correct: "Use reusable bags"
  },
  {
    question: "Which material is biodegradable?",
    options: ["Plastic", "Styrofoam", "Paper", "Aluminum"],
    correct: "Paper"
  }
];

const quizContainer = document.getElementById('quiz');
quizData.forEach((q, index) => {
  const div = document.createElement('div');
  div.classList.add('quiz-question');
  div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
  
  q.options.forEach(option => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="q${index}" value="${option}"> ${option}`;
    div.appendChild(label);
  });
  
  quizContainer.appendChild(div);
});

document.getElementById('submitQuiz').addEventListener('click', function() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });

  document.getElementById('quizResult').textContent = `You scored ${score} out of ${quizData.length}!`;
});
