import { buildUIbase } from '../base sections/componentBase.js'
import { buildTitleSection } from '../base sections/componentSectionTitle.js'
import { buildGameGridSection } from '../base sections/componentSectionGameGrid.js'
import { buildPlayerSection } from '../base sections/componentSectionPlayers.js'

function buildUI(){
    buildUIbase()
    buildTitleSection()
    buildGameGridSection()
    buildPlayerSection()
}

export { buildUI }