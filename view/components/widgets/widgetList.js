import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildWidgetList(parent, itemCollection, listProperties, containerProperties){
    //build list element
    const list = createHTMLElement('ul', '', listProperties.classes)
    //build list items, append to list
    for (let item of itemCollection) {
        const li = createHTMLElement('li', item.text, item.classes, item.attributes)
        appendElements(list, [li])
    }
    //build container, append list
    const container = createHTMLElement('div', '', containerProperties.classes, [], [list])
    //append container to parent
    appendElements(parent, [container])
}

export { buildWidgetList }