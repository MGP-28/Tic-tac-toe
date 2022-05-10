import { createHTMLElement, appendElements } from '../../../../helpers/dom.js'
import { buildWidgetTitle } from '../widgetTitle.js'
import { buildWidgetAvatar } from './widgetAvatar.js'

function buildWidgetPlayerInfoTab(parent, name, id){
    //build container
    let classesToAdd = ['w-1/2', 'h-full', 'flex', 'flex-col', 'items-center']
    const containerDiv = createHTMLElement('div', '', classesToAdd, [{name: 'id', value: `playerTab${id}`}])
    //build name element using title widget
    const titleProperties = {element: 'h1', text: name}
    const titledivProperties = {classes: ['h-2/6', 'flex', 'items-center']}
    buildWidgetTitle(containerDiv, titleProperties, titledivProperties)
    //build avatar element and append to container
    classesToAdd = ['fa-solid', 'fa-plus', 'text-3xl']
    const icon = createHTMLElement('i', '', classesToAdd)
    buildWidgetAvatar(containerDiv, icon, id)
    //append to given parent
    appendElements(parent, [containerDiv])
}

export { buildWidgetPlayerInfoTab }