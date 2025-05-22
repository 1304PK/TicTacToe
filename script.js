const playBtn = document.querySelector('.play-button')
const player1Name = document.getElementById('player1-name')
const player2Name = document.getElementById('player2-name')
const container = document.querySelector('.initial-container')

let turnX = true

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function addGameBoard(){

    function disableBtns(){
        buttons.forEach((button) => {
            button.disabled = true
        })
    }

    
    container.innerHTML = ''
    container.classList.remove('initial-container')
    container.classList.add('container')

    const gameboardDiv = document.createElement('div')
    gameboardDiv.classList.add('gameboard')
    container.append(gameboardDiv)
    for (let i = 1; i <= 9; i++){
        const buttonElement = document.createElement('button')
        buttonElement.classList.add('box')
        gameboardDiv.append(buttonElement)
    }

    const buttons = document.querySelectorAll('.box')
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if(turnX === true){
                button.textContent = 'X'
                turnX = false
                button.disabled = true
                
            }
            else{
                button.textContent = 'O'
                turnX = true
                button.disabled = true
            }
    
            winConditions.forEach((array) => {
                const first = buttons[array[0]].textContent
                const second = buttons[array[1]].textContent
                const third = buttons[array[2]].textContent
    
                if ((first === second && (first !== '' && second !== '')) && second === third && (second !== '' && third !== '')){
                    console.log('win')
                    disableBtns()
                    
                }
            })
        })
    })
    const resetBtnElement = document.createElement('button')
    resetBtnElement.textContent = 'Reset'
    resetBtnElement.classList.add('reset-button')
    container.append(resetBtnElement)


    const resetBtn = document.querySelector('.reset-button')
    resetBtn.addEventListener("click", () => {

        buttons.forEach((button) => {
            button.textContent = ''
            button.disabled = false
        })
        turnX = true
    
    })
    
}




playBtn.addEventListener("click", () => {
    console.log(player1Name.value + " " + player2Name.value)
    addGameBoard()
})




