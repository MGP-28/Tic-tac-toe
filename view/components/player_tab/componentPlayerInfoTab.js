import { createHTMLElement, appendElements } from '../../../../helpers/dom.js'
import { buildTitle } from '../componentTitle.js'
import { buildWidgetAvatar } from '../widgets/Player/widgetAvatar.js'

function buildPlayerInfoTab(parent, name, id){
    //build container
    let classesToAdd = ['w-1/2', 'h-full', 'flex', 'flex-col', 'items-center']
    const containerDiv = createHTMLElement('div', '', classesToAdd, [{name: 'id', value: `playerInfo${id}`}])
    //build name element using title widget
    const titleProperties = {element: 'h1', text: name, classes: ['w-full', 'text-center'], attributes: [{name: 'id', value: `playerTitle${id}`}]}
    const titledivProperties = {classes: ['h-2/6', 'flex', 'items-center', 'w-4/5', 'overflow-hidden']}
    buildTitle(containerDiv, titleProperties, titledivProperties)
    //build avatar element and append to container
    classesToAdd = ['fa-solid', 'fa-plus', 'text-3xl']
    const icon = createHTMLElement('i', '', classesToAdd, [{name: 'id', value: `playerIcon${id}`}])
    buildWidgetAvatar(containerDiv, icon, id)
    //append to given parent
    appendElements(parent, [containerDiv])
}

export { buildPlayerInfoTab }