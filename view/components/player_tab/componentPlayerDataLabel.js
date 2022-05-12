import { buildList } from '../componentList.js'

function buildPlayerDataLabel(parent){
    const itemCollection = [
        {text: 'Wins', classes: ['text-green-500']},
        {text: 'Losses', classes: ['text-yellow-600']},
        {text: 'Ties'},
        {text: 'Forfeits', classes: ['text-red-500']}
    ]
    const listProperties = {
        classes: ['place-self-center', 'flex', 'flex-col', 'items-center'],
        attributes: [], 
        itemsToAppend: []
    }
    const containerProperties = {
        classes: ['absolute', 'left-1/2', 'translate-center-x', 'flex', 'flex-col', 'align-center'],
        attributes: [], 
        itemsToAppend: []
    }
    buildList(parent, itemCollection, listProperties, containerProperties)
}

export { buildPlayerDataLabel }