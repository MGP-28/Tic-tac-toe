import { createHTMLElement } from '../../../helpers/dom.js'
import { ael } from '../../../helpers/domevents.js'

function buildButton(buttonProperties, eventFunction = null){
    const btn = createHTMLElement('button', buttonProperties.text, buttonProperties.classes, buttonProperties.attributes, buttonProperties.itemsToAppend)
    if(eventFunction) ael(btn, 'click', eventFunction)
    return btn
}

export { buildButton }