import { buildUIbase } from './components/UIBase.js'
import { buildTitleSection } from './components/UISectionTitle.js'
import { buildGameGridSection } from '../view/components/UISectionGameGrid.js'
import { buildPlayerSection } from '../view/components/UISectionPlayers.js'

function buildUI(){
    buildUIbase()
    buildTitleSection()
    buildGameGridSection()
    buildPlayerSection()
}

export { buildUI }