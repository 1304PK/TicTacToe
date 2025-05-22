const buttons = document.querySelectorAll('.box')
const resetBtn = document.querySelector('.reset-button')

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

function disableBtns(){
    buttons.forEach((button) => {
        button.disabled = true
    })
}

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

resetBtn.addEventListener("click", () => {

    buttons.forEach((button) => {
        button.textContent = ''
        button.disabled = false
    })
    turnX = true

})