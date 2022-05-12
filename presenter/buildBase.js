import { buildUI } from '../view/components/base sections/buildUI.js'
import { seedPlayers } from '../store/players.js'

function buildBase(){
    buildUI()
    seedPlayers()
}


export { buildBase }