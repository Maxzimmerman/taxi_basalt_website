setTimeout(() => {
    const elements = document.querySelectorAll(".reload-after");
    elements.forEach(e => {
        e.addEventListener('click', () => {
            setTimeout(() => {
                location.reload();
            }, 100)
        })
    })
}, 300);
