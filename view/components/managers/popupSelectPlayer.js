import { buildPopup } from '../componentPopup.js'
import { buildForm } from '../componentForm.js'

const body = document.querySelector('body')

function popupPlayerList(playerid){
    //properties to apply to form
    const formProperties = {
        classes: [],
        attributes: [], 
        itemsToAppend: [], 
        inputs: ['Name'], 
        buttons: [{text: 'Save', classes:[]}, {text: 'Cancel', classes:[]}]
    }
    //build popup
    const popup = buildPopup(containerProperties)
    //properties to apply to popup container
    const containerProperties = {
        classes: [], 
        attributes: [], 
        itemsToAppend: [formProperties]
    }
    //build form and append to popup
    buildForm(popup, containerProperties, formProperties)
}


function popupAddNewPlayer(playerid){
    
}

function popupNewPlayerSuccess(){
    
}

function popupNewPlayerFailed(){
    
}

export { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed }