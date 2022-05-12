import { createHTMLElement } from '../../../helpers/dom.js'

function buildPopup(divProperties){
    const container = createHTMLElement('div', '', divProperties.classes, divProperties.attributes, divProperties.itemsToAppend)
    const background = createHTMLElement('div', '', ['absolute', 'w-full', 'h-full', 'transparent', 'flex', 'justify-center', 'items-center'], [{name: 'id', value: 'popup-base'}], [container])
    return background
}

export { buildPopup }