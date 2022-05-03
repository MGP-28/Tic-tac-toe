import { qs } from '../../helpers/dom.js'
import { ael } from '../../helpers/domevents.js'
import { Player } from '../../model/player.js'
import { PlayerVal } from '../../validators/Player/index.js'
import { saveToLocalStorageOnExit } from '../../presenter/contactList.js'



function saveOnPageUnloadHandler(){
    window.addEventListener("beforeunload", function (event) {
        saveToLocalStorageOnExit()
    });
}

export {startSubmitHandler, buildList, saveOnPageUnloadHandler}