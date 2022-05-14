import { createHTMLElement, appendElements } from '../../../helpers/dom.js'
import { ael } from '../../../helpers/domevents.js'
import { getPlayerFromForm } from '../../workers/registerPlayer.js'

function buildForm(parent, formProperties, containerProperties){
    //build form
    const form = createHTMLElement('form', '', formProperties.classes, formProperties.attributes, formProperties.itemsToAppend)
    //add submit event listener
    ael(form, 'submit', getPlayerFromForm)
    //build container
    containerProperties.itemsToAppend.push(form)
    const container = createHTMLElement('div', '', containerProperties.classes, containerProperties.attributes, containerProperties.itemsToAppend)
    //append container to parent
    appendElements(parent, [container])
}

export { buildForm }