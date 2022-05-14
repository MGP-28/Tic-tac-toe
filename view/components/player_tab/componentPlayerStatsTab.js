import { buildList } from '../componentList.js'

function buildPlayerStatsTab(parent, id){
    //build element using list widget
    const itemCollection = [
        {text: '-', classes: ['text-green-500'], attributes: [{name: 'id', value: `playerWins${id}`}]},
        {text: '-', classes: ['text-yellow-600'], attributes: [{name: 'id', value: `playerLosses${id}`}]},
        {text: '-', attributes: [{name: 'id', value: `playerTies${id}`}]},
        {text: '-', classes: ['text-red-500'], attributes: [{name: 'id', value: `playerForfeits${id}`}]},
    ]
    const listProperties = {
        classes: ['place-self-center'],
        attributes: [], 
        itemsToAppend: []
    }
    const containerProperties = {
        classes: ['w-1/2', 'flex', 'flex-col', 'align-center'],
        attributes: [{name: 'playerid', value: id}, {name: 'id', value: `playerStats${id}`}], 
        itemsToAppend: []
    }
    buildList(parent, itemCollection, listProperties, containerProperties)
}

export { buildPlayerStatsTab }