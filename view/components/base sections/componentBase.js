import { createHTMLElement, appendElements } from '../../../helpers/dom.js'

function buildUIbase(){
    const body = document.querySelector('body')
    //build main div that contains all UI elements
    let attributesToAdd = [{name: 'id', value: 'mainDiv'}]
    let classesToAdd = ['pulsing-slow','w-96', 'flex', 'flex-col', 'border-2', 'border-red-800', 'rounded-3xl', 'overflow-hidden', 'bg-gray-900']
    const internalDiv = createHTMLElement('div', '', classesToAdd, attributesToAdd, [])
    //build upper div, buffer between body and main div
    classesToAdd = ['w-screen', 'h-screen', 'flex', 'justify-center', 'items-center']
    attributesToAdd = [{name: 'id', value: 'topDiv'}]
    const mainDiv = createHTMLElement('div', '', classesToAdd, attributesToAdd, [internalDiv])
    //append divs to body
    appendElements(body, [mainDiv])
}

export { buildUIbase }