
const randomNumber = Math.floor(Math.random() * 100)
function checkGuess() {
const userGuess = parseInt(document.getElementById('userGuess').value)

const message = document.getElementById('message')

if (userGuess === randomNumber) {
    message.style.color = 'green'
    message.textContent = "Tabriklaymiz! Siz to'g'ri raqamni topdingiz!"
} else if (userGuess < randomNumber) {
    message.style.color = 'red'
    message.textContent = "Juda past. Qayta urinib ko'ring."
} else {
    message.style.color = 'red'
    message.textContent = "Juda baland. Qayta urinib ko'ring."
}
}