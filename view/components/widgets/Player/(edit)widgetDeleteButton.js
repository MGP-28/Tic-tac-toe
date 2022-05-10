import { createButton } from './button.js'
import { removeContact } from '../../../../presenter/playerManager.js'

function initializeDeleteButton(){
    const deleteBtn = createButton('Delete', (event)=>{
        removeContact(event.target.parentElement.getAttribute('index'))
    })
    const classesToAdd = ['bg-red-700', 'text-white']
    applyClasses(deleteBtn, classesToAdd)
    return deleteBtn
}

export {initializeDeleteButton}