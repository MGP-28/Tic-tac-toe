import { NameValidator } from '../Generic/validator_nameNotNull.js'
import { checkIsPlayerUnique } from '../../presenter/playerManager.js'

class playerNameVal{
    static exec(name){
        NameValidator.exec(name)
        checkIsPlayerUnique(name)
    }
}

export { playerNameVal }