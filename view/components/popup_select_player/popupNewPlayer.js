import { buildForm } from '../componentForm.js'

function buildPopupAddNewPlayer(){
    
    //get popup element
    
    //properties to apply to form
    const formProperties = {
        classes: [],
        attributes: [], 
        itemsToAppend: [], 
        inputs: ['Name'], 
        buttons: [{text: 'Save', classes:[]}, {text: 'Cancel', classes:[]}]
    }
    //build form and append to popup
    buildForm(popup, containerProperties, formProperties)
}

export { buildPopupAddNewPlayer }