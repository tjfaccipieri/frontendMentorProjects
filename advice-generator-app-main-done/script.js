async function getAdvice() {
  
  const adviceFetch = await fetch('https://api.adviceslip.com/advice')
  const advice = await adviceFetch.json()
  console.log(advice.slip)

  const body = document.querySelector('.content')

  body.innerHTML = `
    <h3 class='adviceTitle'> Advice #${advice.slip.id}</h3>
    <p class='adviceText'>"${advice.slip.advice}"</p>
    <img src="./images/pattern-divider-mobile.svg" alt="divider">
    <div class="diceContainer" onclick='getAdvice()'><img src="./images/icon-dice.svg" alt=""></div>
  `
}
