const form = document.querySelector('.quiz-form')

const popup = document.querySelector('.popup-wrapper')

const scoreContent = document.querySelector('.popup-content__score')

const scoreMessageContent = document.querySelector('.popup-content__message')

const correctAnswers = ['B','A','B','B','A','B']

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

const logPopupMessage = score => {
  console.log(score)
  switch (score) {
    case 17:
      scoreMessageContent.textContent = 'Você acertou somente uma questão, mas pode melhorar! Tente novamente!'
      break;
    case 33:
      scoreMessageContent.textContent = 'Você acertou somente duas questões, mas pode melhorar! Tente novamente!'
      break;
    case 50:
      scoreMessageContent.textContent = 'Você está na média! Tente um pouco mais!'
      break;
    case 67:
        scoreMessageContent.textContent = 'Mais três e você será o campeão! Vamos, você vai conseguir!'
        break;
    case 83:
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

const processScore = userAnswers => {
  let score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 16.66
    }
  })

  score = Math.round(score)

  logPopupMessage(score)
  openPopup()

}

const handleSubmit =  event => {
  event.preventDefault()

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value,
    event.target.inputQuestion5.value,
    event.target.inputQuestion6.value
  ]

  processScore(userAnswers)
}

popup.addEventListener('click', closePopup)
form.addEventListener('submit', handleSubmit)