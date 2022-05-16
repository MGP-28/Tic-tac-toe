function closePopup(){
    const popup = document.querySelector('#popup-base')
    if(popup) popup.remove()
}

export { closePopup }