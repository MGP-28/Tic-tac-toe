import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildList(parent, itemCollection, listProperties, containerProperties){
    //build list element
    const list = createHTMLElement('ul', '', listProperties.classes)
    //build list items, append to list
    for (let item of itemCollection) {
        const li = createHTMLElement('li', item.text, item.classes, item.attributes, item.itemsToAppend)
        appendElements(list, [li])
    }
    //build container, append list
    containerProperties.itemsToAppend.push(list)
    const container = createHTMLElement('div', '', containerProperties.classes, containerProperties.attributes, containerProperties.itemsToAppend)
    //append container to parent
    appendElements(parent, [container])
}

export { buildList }