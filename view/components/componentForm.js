import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildForm(parent, listProperties, containerProperties){
    
    //

    //build container
    const container = createHTMLElement('div', '', containerProperties.classes, [], [])
    //append container to parent
    appendElements(parent, [container])
}

export { buildForm }