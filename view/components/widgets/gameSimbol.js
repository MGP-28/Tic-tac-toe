import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function insertGameCircle(parent){
    //create circle icon with favicon and append to given parent
    const ArrClassesToAdd = ['text-8xl', 'fa-solid', 'fa-o']
    const circle = createHTMLElement('i', ArrClassesToAdd)
    appendElements(parent, [circle])
}

function insertGameXmark(parent){
    //create xmark icon with font-awesome and append to given parent
    const ArrClassesToAdd = ['text-8xl', 'fa-solid', 'fa-xmark']
    const circle = createHTMLElement('i', ArrClassesToAdd)
    appendElements(parent, [circle])
}

export { insertGameCircle, insertGameXmark }