import { qs, qsa, applyClasses } from '../../helpers/dom.js'

function buildStyle(){
    styleInputs()
    styleInputButtons()
}

function styleInputs(){
    const classesToAdd = [
        'border', 'p-1', 'rounded', 'mb-3'
    ]
    const inputs = qsa('input')
    inputs.forEach(input => {
        applyClasses(input, classesToAdd)
    });
}

function styleInputButtons(){
    const classesToAdd = [
        'px-5', 'font-semibold', ''
    ]
    const inputButtons = qsa('input[isButton=true]')
    inputButtons.forEach(inputButton => {
        classesToAdd.pop()
        classesToAdd.push((inputButton.type === 'submit') ? 'bg-green-300' : 'bg-red-300')
        applyClasses(inputButton, classesToAdd)
    });
}

export { buildStyle }