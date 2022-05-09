const createHTMLElement = (itemToCreate, textContent = '', attributes = [], classes = [], itemsAppend = []) => {
    const item = document.createElement(itemToCreate)
    item.textContent = textContent
    applyAttributes(item, attributes)
    applyClasses(item, classes)
    appendElements(item, itemsAppend)
    return item
}
const applyAttributes = (target, attributeArr) => {
    attributeArr.forEach(element => { 
        target.setAttribute(element.name, element.value) 
    })
    return target
}
const applyClasses = (target, classArr) => {
    classArr.forEach(element => { target.classList.add(element) })
    return target
}
const appendElements = (target, itemArr) => {
    itemArr.forEach(element => { target.append(element) })
    return target
}

export {createHTMLElement, applyAttributes, applyClasses, appendElements}