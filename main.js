import { buildBase } from './presenter/buildBase.js'
//import { saveOnPageUnloadHandler } from './assets/js/events.js'

//global selectors


//style configurator
buildBase()

//call events
//saveOnPageUnloadHandler()

classesHTMLtoJsArray('w-1/2 flex flex-col align-center')

function classesHTMLtoJsArray(string){
    const words = string.split(' ')
    let outputString = 'JS READY -> '
    words.forEach(word => {
        outputString += (`'${word}', `)
    });
    outputString = outputString.slice(0, -2)
    console.log(outputString)
}