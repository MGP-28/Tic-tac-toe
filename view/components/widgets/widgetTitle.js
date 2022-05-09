import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildWidgetTitle(parent, title, titleElement, divClasses = [], titleClasses = [], divAttributes = [], titleAttributes = []){
    //build text element
    const text = createHTMLElement(titleElement, title, titleClasses, titleAttributes)
    //build title div, append text
    const titleDiv = createHTMLElement('div', '', divClasses, divAttributes, [text])
    //append to parent
    appendElements(parent, [titleDiv])
}

export { buildWidgetTitle }