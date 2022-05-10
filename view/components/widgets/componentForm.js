import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildWidgetForm(parent, itemCollection, listProperties, containerProperties){
    
    //

    //build container
    const container = createHTMLElement('div', '', containerProperties.classes, [], [])
    //append container to parent
    appendElements(parent, [container])
}

export { buildWidgetForm }