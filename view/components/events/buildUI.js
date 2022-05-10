import { buildUIbase } from '../base sections/UIBase.js'
import { buildTitleSection } from '../base sections/UISectionTitle.js'
import { buildGameGridSection } from '../base sections/UISectionGameGrid.js'
import { buildPlayerSection } from '../base sections/UISectionPlayers.js'

function buildUI(){
    buildUIbase()
    buildTitleSection()
    buildGameGridSection()
    buildPlayerSection()
}

export { buildUI }