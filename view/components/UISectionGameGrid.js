import { createHTMLElement, appendElements } from '../../helpers/dom.js'

function buildGameGridSection(){
    //build grid area
    let classesToAdd = ['w-full', 'h-full', 'grid', 'grid-cols-3', 'grid-rows-3', 'gap-0.5', 'bg-gray-400']
    const gridArea = createHTMLElement('div', '', classesToAdd)
    //build each grid element and append them to grid area
    classesToAdd = ['bg-red-900', 'flex', 'justify-center', 'items-center']
    for (let index = 0; index < 9; index++) {
        const gridSlot = createHTMLElement('div', '', classesToAdd, [{name: 'gridSlot', value: index}])
        appendElements(gridArea, [gridSlot])
    }
    //build grid container and append grid area
    classesToAdd = ['h-96', 'flex', 'justify-center', 'items-center', 'bg-red-800', 'py-0.5']
    const gridContainer = createHTMLElement('div', '', classesToAdd, [{name: 'id', value: 'gridDiv'}], [gridArea])
    //append grid container to main div
    const mainDiv = document.querySelector('#mainDiv')
    appendElements(mainDiv, [gridContainer])
}

export { buildGameGridSection }