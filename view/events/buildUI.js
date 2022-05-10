import { buildUIbase } from './components/base sections/UIBase.js'
import { buildTitleSection } from './components/UISectionTitle.js'
import { buildGameGridSection } from './components/base sections/UISectionGameGrid.js'
import { buildPlayerSection } from '../view/components/UISectionPlayers.js'

function buildUI(){
    buildUIbase()
    buildTitleSection()
    buildGameGridSection()
    buildPlayerSection()
}

export { buildUI }