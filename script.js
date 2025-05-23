const playBtn = document.querySelector('.play-button')
const player1Name = document.getElementById('player1-name')
const player2Name = document.getElementById('player2-name')
const container = document.querySelector('.initial-container')

let turnX = true
let emptybox = true
let gameEnd = false
let btnTextArray = []

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


function addGameBoard() {

    function disableBtns() {
        buttons.forEach((button) => {
            button.disabled = true
        })
    }


    container.innerHTML = ''
    container.classList.remove('initial-container')
    container.classList.add('container')

    const player1Div = document.createElement('div')
    player1Div.textContent = `${player1Name.value}(X)`
    player1Div.classList.add('gameboard-player-name')
    container.append(player1Div)

    const gameboardDiv = document.createElement('div')
    gameboardDiv.classList.add('gameboard')
    container.append(gameboardDiv)

    const player2Div = document.createElement('div')
    player2Div.textContent = `${player2Name.value}(O)`
    player2Div.classList.add('gameboard-player-name')
    container.append(player2Div)

    const winnerName = document.createElement('h2')
    winnerName.classList.add('winner-name')
    winnerName.textContent = ''
    gameboardDiv.append(winnerName)


    for (let i = 1; i <= 9; i++) {
        const buttonElement = document.createElement('button')
        buttonElement.classList.add('box')
        gameboardDiv.append(buttonElement)
    }

    const buttons = document.querySelectorAll('.box')
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (turnX === true) {
                button.textContent = 'X'
                turnX = false
                button.disabled = true

            }
            else {
                button.textContent = 'O'
                turnX = true
                button.disabled = true
            }

            winConditions.forEach((array) => {
                const first = buttons[array[0]].textContent
                const second = buttons[array[1]].textContent
                const third = buttons[array[2]].textContent

                if ((first === second && (first !== '' && second !== '')) && second === third && (second !== '' && third !== '')) {
                    if (first === 'X') {
                        winnerName.textContent = `${player1Name.value} won`
                    }
                    else {
                        winnerName.textContent = `${player2Name.value} won`
                    }
                    gameEnd = true
                    disableBtns()
                }
            })
            buttons.forEach((boxes) => {
                // if (boxes.textContent === ''){
                //     console.log('wow')
                //     emptybox = true
                //     return emptybox   
                // }
                btnTextArray.push(boxes.textContent)
                
               
    

            })

            if (btnTextArray.includes('')){
                emptybox = true
                btnTextArray = []
            }
            else{
                emptybox = false

            }

            buttons.forEach(() => {
                if (emptybox === false && gameEnd === false){
                    disableBtns()
                    winnerName.textContent = 'Game Tie'
                    btnTextArray = []
                    console.log('tie')

                }
            })
        })

        

    })
    const resetBtnElement = document.createElement('button')
    resetBtnElement.textContent = 'Reset'
    resetBtnElement.classList.add('reset-button')
    gameboardDiv.append(resetBtnElement)


    const resetBtn = document.querySelector('.reset-button')
    resetBtn.addEventListener("click", () => {
        winnerName.textContent = ''
        buttons.forEach((button) => {
            button.textContent = ''
            button.disabled = false
        })
        turnX = true
        btnTextArray = []
    })

}


playBtn.addEventListener("click", () => {
    addGameBoard()
})