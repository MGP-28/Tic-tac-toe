import { NameValidator } from '../Generic/validator_nameNotNull.js'
import { NumberNotNullValidator } from '../Generic/validator_numberNotNull.js'

class PlayerVal{
    static exec(props){
        const {name, totalGames, winCount, loseCount, tieCount} = props
        NameValidator.exec(name)
        NumberNotNullValidator.exec(totalGames)
        NumberNotNullValidator.exec(winCount)
        NumberNotNullValidator.exec(loseCount)
        NumberNotNullValidator.exec(tieCount)
    }
}

export { PlayerVal }