import { buildUI } from '../view/components/base sections/buildUI.js'
import { seedPlayers } from '../store/players.js'
import { addEventFinishPlayerSelect } from '../view/components/events/addEventFinishPlayerSelect.js'

function buildBase(){
    //call functions to build starting UI
    buildUI()
    //seed players for testing
    seedPlayers()
    //Global event listeners
    addEventFinishPlayerSelect()
}


export { buildBase }