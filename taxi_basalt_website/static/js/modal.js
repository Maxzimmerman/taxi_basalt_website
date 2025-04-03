const modal = document.querySelector('#modals-here');

function buttonClose(input) {
    if (input === 'open') {
        modal.style.display = 'block'
    } else {
        modal.style.display = 'none'
    }
}


