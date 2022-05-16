import { appendElements } from '../../../helpers/dom.js'
import { buildPopup } from '../componentPopup.js'
import { buildTitle } from '../componentTitle.js'
import { buildList } from '../componentList.js'
import { buildDeleteButton } from '../widgets/Player/widgetDeleteButton.js'
import { buildSelectPlayerButton } from '../widgets/Player/widgetSelectPlayerButton.js'
import { buildAddPlayerButton } from '../widgets/Player/widgetAddPlayerButton.js'

function buildPopupPlayerList(playerid, activePlayers, registeredPlayers){    
    //properties to apply to popup container
    let containerProperties = {
        classes: ['absolute', 'flex', 'flex-col', 'justify-content', 'items-center', 'bg-gray-900', 'rounded-xl', 'border', 'border-red-700', 'shadow-glow', 'w-4/5', 'max-w-2xl', 'overflow-hidden'], 
        attributes: [{name: 'id', value: 'popup-window'}, {name: 'playerid', value: playerid}], 
        itemsToAppend: []
    }
    //build popup
    const popup = buildPopup(containerProperties)
    const popupWindow = popup.querySelector('#popup-window')
    //build player list title
    containerProperties = {
        classes: ['flex', 'justify-content', 'items-center', 'w-full'], 
        attributes: [], 
        itemsToAppend: []
    }
    const titleProperties = {
        element: 'h1',
        text: 'Registered players',
        classes: ['text-lg', 'font-semibold', 'bg-red-700', 'w-full', 'flex', 'justify-center', 'py-2'], 
        attributes: [{name: 'id', value: 'popup-title'}], 
        itemsToAppend: []
    }
    buildTitle(popupWindow, titleProperties, containerProperties)
    //properties to apply to player list inside popup
    containerProperties = {
        classes: ['w-full', 'flex', 'justify-center', 'items-center', 'py-5'], 
        attributes: [{name: 'id', value: 'popup-content'}], 
        itemsToAppend: []
    }
    const listProperties = {
        classes: ['w-5/6', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-5'], 
        attributes: [], 
        itemsToAppend: []
    }
    //build each list item
    const itemCollection = []
    const players = registeredPlayers
    ////input all available users to list items array
    for (let index = 0; index < players.length; index++) {
        const item = {
            text: '',
            classes: ['w-full', 'h-12', 'flex', 'justify-between', 'items-center', 'gap-5', 'overflow-hidden'],
            attributes: [
                {name: 'index', value: index}
            ], 
            itemsToAppend: [
            ]
        }
        ////disable all for active player in the selected player slot
        if(activePlayers[2-playerid] != players[index]){
            item.itemsToAppend.push(buildSelectPlayerButton(players[index].name))
            ////disable delete for active player in the selected player slot
            if(activePlayers[playerid-1] != players[index]) {
                item.itemsToAppend.push(buildDeleteButton())
            }
            else { item.classes.push('bg-gray-800') }
        }
        else {
            item.itemsToAppend.push(buildSelectPlayerButton(players[index].name, false)) 
            item.classes.push('bg-red-800')
        }
        itemCollection.push(item)
    }

    //build add player button
    const item = {
        text: '',
        classes: ['w-full', 'flex', 'justify-between', 'items-center', 'gap-5'],
        attributes: [], 
        itemsToAppend: [
            buildAddPlayerButton()
        ]
    }
    itemCollection.push(item)
    //build player list into popup content container
    buildList(popupWindow, itemCollection, listProperties, containerProperties)
    //clear old list
    const basePopup = document.querySelector('#popup-base')
    const topDiv = document.querySelector('#topDiv')
    if(basePopup) topDiv.removeChild(basePopup)
    //append to top div of UI
    appendElements(topDiv, [popup])
}

export { buildPopupPlayerList }