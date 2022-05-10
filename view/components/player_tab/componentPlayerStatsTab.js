import { buildList } from '../componentList.js'

function buildPlayerStatsTab(parent, id){
    //build element using list widget
    const itemCollection = [
        {text: '-', classes: ['text-green-500'], attributes: [{name: 'player', value: id}]},
        {text: '-', classes: ['text-yellow-600'], attributes: [{name: 'player', value: id}]},
        {text: '-', attributes: [{name: 'player', value: id}]},
        {text: '-', classes: ['text-red-500'], attributes: [{name: 'player', value: id}]}
    ]
    const listProperties = {classes: ['place-self-center']}
    const containerProperties = {classes: ['w-1/2', 'flex', 'flex-col', 'align-center']}
    buildList(parent, itemCollection, listProperties, containerProperties)
}

export { buildPlayerStatsTab }