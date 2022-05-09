import { createHTMLElement, appendElements } from '../../../../helpers/dom.js'

function buildWidgetAvatar(parent, avatarToInsert, id){
    //build main div element, host for click event
    let classesToAdd = ['w-28', 'h-28', 'border', 'border-red-900', 'rounded-full', 'bg-gray-600', 'flex', 'justify-center', 'items-center', 'shadow-2xl', 'shadow-gray-800']
    let attributesToAdd = [{name: 'playerId', value: id}]
    const innerDiv = createHTMLElement('div', '', classesToAdd, attributesToAdd, [avatarToInsert])
        //CLICK EVENT
    //build title div, append text
    classesToAdd = ['h-4/6', 'flex', 'justify-center']
    const containerDiv = createHTMLElement('div', '', classesToAdd, [], [innerDiv])
    //append to parent
    appendElements(parent, [containerDiv])
}

export { buildWidgetAvatar }