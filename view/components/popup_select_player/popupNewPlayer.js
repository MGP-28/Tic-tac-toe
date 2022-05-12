import { buildAddPlayerForm } from '../widgets/Player/widgetAddPlayerForm.js'

function buildPopupAddNewPlayer() {
    //get popup element
    const popupContent = document.querySelector('#popup-content')
    popupContent.removeChild(popupContent.querySelector('ul'))
    //build form and append to popup content div
    buildAddPlayerForm(popupContent)
}

export { buildPopupAddNewPlayer }