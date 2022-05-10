import { buildUIbase } from './componentBase.js'
import { buildTitleSection } from './componentSectionTitle.js'
import { buildGameGridSection } from './componentSectionGameGrid.js'
import { buildPlayerSection } from './componentSectionPlayers.js'

function buildUI(){
    buildUIbase()
    buildTitleSection()
    buildGameGridSection()
    buildPlayerSection()
}

export { buildUI }