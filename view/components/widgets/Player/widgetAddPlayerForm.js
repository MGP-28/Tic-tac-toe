import { createHTMLElement } from '../../../../helpers/dom.js'
import { buildForm } from '../widgetForm.js'
import { buildButton } from '../widgetButton.js'

function buildAddPlayerForm(popupContent) {
    //build name input
    const input = {
        classes: ['text-black', 'p-2', 'w-full', 'rounded', 'border-4'],
        attributes: [
            {name: 'type', value: 'text'},
            {name: 'name', value: 'name'},
            {name: 'placeholder', value: 'Player name'},
            {name: 'autocomplete', value: 'name'},
            {name: 'required', value: ''}
        ]
    }
    const inputElement = createHTMLElement('input', '', input.classes, input.attributes)
    //build save button
    const buttonProperties = {
        classes: ['w-full', 'bg-gray-300', 'text-black', 'font-semibold', 'border', 'border-red-500', 'p-2', 'rounded', 
        'hover:font-bold', 'hover:bg-gray-200', 'hover:text-black', 'hover:border-red-500', 'shadow-glow-hover'],
        attributes: [{name: 'type', value: 'submit'}],
        itemsToAppend: [],
        text: 'Add player'
    }
    const buttonSave = buildButton(buttonProperties)
    //build form
    const formProperties = {
        classes: ['flex', 'flex-col', 'gap-5'],
        attributes: [{name: 'onsubmit', value: 'return false'}],
        itemsToAppend: [inputElement, buttonSave],
        event: ((event) => {})
    }
    const containerProperties = {
            classes: ['w-4/6'],
            attributes: [],
            itemsToAppend: []
        }
    buildForm(popupContent, formProperties, containerProperties)
}

export { buildAddPlayerForm }