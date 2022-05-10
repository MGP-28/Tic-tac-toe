//import {  } from '' //button

function buildWidgetPopup(divProperties){
    const container = createHTMLElement('div', '', divProperties.classes, divProperties.attributes, divProperties.itemsToAppend)
    const background = createHTMLElement('div', '', ['absolute, w-full, h-full, transparent'], [{name: 'id', value: 'basePopup'}], [container])
    return background
}

export { buildWidgetPopup }