import { createHTMLElement } from '../../../helpers/dom.js'
import { ael } from '../../../helpers/domevents.js'

function createButton(buttonProperties, eventFunction = {}){
    const btn = createHTMLElement('button', buttonProperties.text, buttonProperties.classes, buttonProperties.attributes, buttonProperties.itemsToAppend)
    if(eventFunction) ael(btn, 'click', eventFunction, true)
    return btn
}

export { createButton }