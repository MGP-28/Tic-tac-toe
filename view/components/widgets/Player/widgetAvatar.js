import { createHTMLElement, appendElements } from '../../../../helpers/dom.js'
import { ael } from '../../../../helpers/domevents.js'
import { avatarClickEvent } from '../../events/avatarClick.js'

function buildWidgetAvatar(parent, avatarToInsert, id){
    //build main div element, host for click event
    let classesToAdd = ['w-28', 'h-28', 'border', 'border-red-900', 'rounded-full', 'bg-gray-600', 'flex', 'justify-center', 'items-center','shadow-glow', 'hover:bg-gray-500']
    let attributesToAdd = [{name: 'playerId', value: id}]
    const innerDiv = createHTMLElement('div', '', classesToAdd, attributesToAdd, [avatarToInsert])
    //add click event logic to avatar (select/create player)
    ael(innerDiv,'click', avatarClickEvent, true, true)
    //build title div, append text
    classesToAdd = ['h-4/6', 'flex', 'justify-center']
    const containerDiv = createHTMLElement('div', '', classesToAdd, [], [innerDiv])
    //append to parent
    appendElements(parent, [containerDiv])
}

export { buildWidgetAvatar }