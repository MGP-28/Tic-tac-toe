import { buildAddPlayerConfirmPopup } from '../widgets/Player/widgetAddPlayerConfirm.js'

function buildAddPlayerConfirm(playerName, index) {
    //change popup title
    const popupTitle = document.querySelector('#popup-title')
    popupTitle.textContent = 'A warrior joins the battle'
    //get popup element
    const popupContent = document.querySelector('#popup-content')
    popupContent.textContent = ''
    //build form and append to popup content div
    buildAddPlayerConfirmPopup(popupContent, playerName, index)
}

export { buildAddPlayerConfirm }