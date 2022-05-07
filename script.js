const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
        panel.style.backgroundSize = "100% 100%"
    })
})

function removeActiveClass(){
    panels.forEach((panel) => {
        panel.style.backgroundSize = "auto 100%"
        panel.classList.remove('active');
    })
}