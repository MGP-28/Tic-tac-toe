import { buildBase } from './presenter/buildBase.js'
//import { saveOnPageUnloadHandler } from './assets/js/events.js'

//global selectors


//style configurator
buildBase()

//call events
//saveOnPageUnloadHandler()

classesHTMLtoJsArray('h-1/2 flex text-lg pt-1')

function classesHTMLtoJsArray(string){
    const words = string.split(' ')
    let outputString = 'JS READY -> '
    words.forEach(word => {
        outputString += (`'${word}', `)
    });
    outputString = outputString.slice(0, -2)
    console.log(outputString)
}