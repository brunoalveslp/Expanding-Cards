const panels = document.querySelectorAll('.panel');
//return a nodelist similar to an array
panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeAllClasses();
        panel.classList.add('active');
    });
})

function removeAllClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
}