import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildForm(parent, formProperties, containerProperties){
    const form = createHTMLElement('div', '', formProperties.classes, formProperties.attributes)
    //build container
    const container = createHTMLElement('div', '', containerProperties.classes, containerProperties.attributes, [form])
    //append container to parent
    appendElements(parent, [container])
}

export { buildForm }