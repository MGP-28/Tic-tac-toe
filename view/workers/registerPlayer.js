import { registerNewPlayer } from '../../presenter/playerManager.js'
import { playerNameVal } from '../../validators/Player/index.js'

function getPlayerFromForm(event){
    //get Data
    const inputList = [...event.target.children].filter(input => (input.name !== ''))
    const formData = {}
    inputList.forEach(input => {
        formData[input.name] = input.value
    });
    //validate Data
    try {
        playerNameVal.exec(formData['name'])
    } catch (error) {
        console.log(error)
        const nameInput = document.querySelector('#popup-content input')
        const arrClasses = ['error-animation', 'border-red-600']
        arrClasses.forEach(element => {
            nameInput.classList.add(element)
        });
        setTimeout(function() {
            arrClasses.forEach(element => {
                nameInput.classList.remove(element)
            });
        }, 1200)
        return
    }
    registerNewPlayer(formData['name'])
}



export { getPlayerFromForm }