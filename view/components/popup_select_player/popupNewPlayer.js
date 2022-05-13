import { buildAddPlayerForm } from '../widgets/Player/widgetAddPlayerForm.js'

function buildPopupAddNewPlayer() {
    //change popup title
    const popupTitle = document.querySelector('#popup-title')
    popupTitle.textContent = 'Add new player'
    //get popup element
    const popupContent = document.querySelector('#popup-content')
    popupContent.textContent = ''
    //build form and append to popup content div
    buildAddPlayerForm(popupContent)
}

export { buildPopupAddNewPlayer }