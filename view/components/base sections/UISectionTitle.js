import { buildWidgetTitle } from '../widgets/componentTitle.js'

function buildTitleSection(){
    const classesToAddTitle = ['font-bold', 'text-2xl']
    const classesToAddDiv = ['p-6', 'flex', 'justify-center']
    const text = 'TIC TAC TOE'
    const titleProperties = {element: 'h1', text: text, classes: classesToAddTitle}
    const titleDivProperties = {classes: classesToAddDiv}
    const mainDiv = document.querySelector('#mainDiv')
    buildWidgetTitle(mainDiv, titleProperties, titleDivProperties)
}

export { buildTitleSection }