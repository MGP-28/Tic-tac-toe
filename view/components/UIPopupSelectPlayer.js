import { buildWidgetPopup } from './widgets/popup/componentPopup.js'
import { buildWidgetForm } from './widgets/componentForm.js'

const body = document.querySelector('body')

function popupPlayerList(playerid){
    const containerProperties = {classes: [], attributes: [], itemsToAppend: [formProperties]}
    buildWidgetPopup(containerProperties)
    const buttons = [{text: 'Save', classes:[]}, {text: 'Cancel', classes:[]}]
    const formProperties = {classes: [], attributes: [], itemsToAppend: [], inputs: ['Name'], buttons: buttons}
    buildWidgetForm(containerProperties, formProperties)
}


function popupAddNewPlayer(playerid){
    
}

function popupNewPlayerSuccess(){
    
}

function popupNewPlayerFailed(){
    
}

export { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed }