import { createHTMLElement } from '../../../helpers/dom.js'

function buildPopup(divProperties){
    const container = createHTMLElement('div', '', divProperties.classes, divProperties.attributes, divProperties.itemsToAppend)
    const background = createHTMLElement('div', '', ['absolute, w-full, h-full, transparent'], [{name: 'id', value: 'basePopup'}], [container])
    return background
}

export { buildPopup }