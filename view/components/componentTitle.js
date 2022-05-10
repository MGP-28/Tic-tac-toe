import { createHTMLElement, appendElements } from '../../helpers/dom.js'

function buildWidgetTitle(parent, titleProperties, divProperties){
    //build text element
    const text = createHTMLElement(titleProperties.element, titleProperties.text, titleProperties.classes, titleProperties.attributes)
    //build title div, append text
    const titleDiv = createHTMLElement('div', '', divProperties.classes, divProperties.attributes, [text])
    //append to parent
    appendElements(parent, [titleDiv])
}

export { buildWidgetTitle }