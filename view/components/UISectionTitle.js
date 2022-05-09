import { buildWidgetTitle } from './widgets/widgetTitle.js'

function buildTitleSection(){
    const classesToAddTitle = ['font-bold', 'text-2xl']
    const classesToAddDiv = ['p-6', 'flex', 'justify-center']
    const text = 'TIC TAC TOE'
    const mainDiv = document.querySelector('#mainDiv')
    buildWidgetTitle(mainDiv, text, 'h1', classesToAddDiv, classesToAddTitle)
}

export { buildTitleSection }