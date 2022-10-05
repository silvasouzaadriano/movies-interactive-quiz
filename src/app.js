const form = document.querySelector('.quiz-form')

const popup = document.querySelector('.popup-wrapper')

const scoreContent = document.querySelector('.popup-content__score')

const scoreMessageContent = document.querySelector('.popup-content__message')

const correctAnswers = ['D','B','C','A']

let score = 0

const openPopup = () => popup.style.display = 'block'

const closePopup = event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames =  ['popup-close', 'popup-wrapper', 'popup-content__button']
  const shouldClosePopup = classNames.some(className =>
    className === classNameOfClickedElement)

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
}
const showMessageScore = () => {
  switch (score) {
    case 25:
      scoreMessageContent.textContent = 'Você acertou somente uma questão, mas pode melhorar! Tente novamente!'
      break;
    case 50:
      scoreMessageContent.textContent = 'Você está na média! Tente um pouco mais!'
      break;
    case 75:
      scoreMessageContent.textContent = 'Você está quase lá, falta somente uma! Vamos, você vai conseguir!'
      break;        
    case 100:
      scoreMessageContent.textContent = 'Você acertou tudo! Meus parabéns! :)'
      break;
    default:
      scoreMessageContent.textContent = ':( Infelizmente você não foi bem! Tente novamente!'
      break;
  }

  scoreContent.textContent = score
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  openPopup()
  showMessageScore()
}

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers
}

const calculateUserScore = userAnswers => {
  score = 0
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
}

const handleSubmit =  event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  calculateUserScore(userAnswers)
  showFinalScore()
}

popup.addEventListener('click', closePopup)
form.addEventListener('submit', handleSubmit)