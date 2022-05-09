import { createHTMLElement, appendElements } from '../../helpers/dom.js'

function buildUIbase(){
    const body = document.querySelector('body')
    //build lower layer div
    let classesToAdd = ['flex', 'flex-col', 'border-2', 'border-red-800', 'rounded-3xl', 'overflow-hidden', 'bg-gray-900', 'shadow', 'shadow-gray-800']
    const internalDiv = createHTMLElement('div', '', [], classesToAdd, [])
    //build main div, append lower one
    classesToAdd = ['w-screen', 'h-screen', 'flex', 'justify-center', 'items-center']
    const mainDiv = createHTMLElement('div', '', [], classesToAdd, [internalDiv])
    //append divs to body
    appendElements(body, [mainDiv])
}

export { buildUIbase }