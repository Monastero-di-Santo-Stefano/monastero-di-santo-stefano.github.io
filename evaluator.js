//to do : add counter to check if the user has finished playing the game

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

const var questions = [
  {
    question: "Dove si trova il santuario?",
    answers:[
      {text: "Concesio", correct:false},
      {text: "Collebeato", correct:true},
      {text: "Cellatica", correct:false},
      {text: "Gussago", correct:false},
    ]
  },

  {
    question: "Secolo della costruzione?",
    answers:[
      {text: "VII", correct:false},
      {text: "IX", correct:true},
      {text: "XI", correct:false},
      {text: "XVII", correct:false},
    ]
  },

  {
    question: "Cos'era prima?",
    answers:[
      {text: "Monastero", correct:true},
      {text: "Chiesa", correct:false},
      {text: "Comune", correct:false},
      {text: "Palazzo", correct:false},
    ]
  },

  {
    question: "Di che tipo di architettura e'?",
    answers:[
      {text: "Greca", correct:false},
      {text: "Romanica", correct:true},
    ]
  },

  {
    question: "Di che tipo è la flora?",
    answers:[
      {text: "Montana", correct:false},
      {text: "Mediterranea", correct:false},
      {text: "Collinare", correct:true},
      {text: "Tropicale", correct:false},
    ]
  },

  {
    question: "Che animali sono più comuni?",
    answers:[
      {text: "Caprioli", correct:false},
      {text: "Cervi", correct:false},
      {text: "Lupi", correct:false},
      {text: "Lepri", correct:true},
    ]
  },

{
    question: "Cosa narra la leggenda?",
    answers:[
      {text: "Fondato da San Colombano", correct:true},
      {text: "Fondato da Santo Stefano", correct:false},
      {text: "Presenza di un fantasma", correct:false},
      {text: "Presenza di animali magici", correct:false},
    ]
  },

  {
    question: "Com'è il clima?",
    answers:[
      {text: "Arido", correct:false},
      {text: "Nevoso", correct:false},
      {text: "Contintentale", correct:true},
      {text: "Tropicale", correct:false},
    ]
  },

  {
    question: "Dove si trova Collebeato?",
    answers:[
      {text: "Brescia", correct:true},
      {text: "Bergamo", correct:false},
      {text: "Monza", correct:false},
      {text: "Concesio", correct:false},
    ]
  },

  {
    question: "Che animali sono più comuni?",
    answers:[
      {text: "Caprioli", correct:false},
      {text: "Cervi", correct:false},
      {text: "Lupi", correct:false},
      {text: "Lepri", correct:true},
    ]
  }
];

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

