import { createHTMLElement } from '../../../../helpers/dom.js'
import { buildForm } from '../widgetForm.js'

function buildAddPlayerForm(popupContent) {
    const formProperties = {
        classes: [],
        attributes: [],
        itemsToAppend: []
        /*inputs: [
            { element: 'input', type: 'text', placeholder: `Enter the player's name`, name: 'name' }
        ],
        buttons: [
            { text: 'Save', classes: [], attributes: [] },
            { text: 'Clear', classes: [] }
        ]*/
    }

    const input = {
        classes: [],
        attributes: []
    }
    const inputElement = createHTMLElement('input', '', input.classes, input.attributes)
    
    const containerProperties = {
            classes: [],
            attributes: [],
            itemsToAppend: []
        }
    buildForm()
}

export { buildAddPlayerForm }