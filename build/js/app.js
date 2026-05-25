document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    ScrollNav()
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
}

function crearGaleria(){
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        console.log(imagen)

        //Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

     const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        console.log(imagen)
    
    //Generar Modal
    const modal = document.createElement('DIV')
          modal.classList.add('modal')
          modal.onclick = cerrarModal
          modal.appendChild(imagen)

    //Boton Cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON')
         cerrarModalBtn.textContent = 'X'
         cerrarModalBtn.classList.add('btn-cerrar')
         cerrarModalBtn.onclick = cerrarModal

          
        modal.appendChild(imagen)
        modal.appendChild(cerrarModalBtn)  

    // Agregar HTML 
        const body = document.querySelector('body')
        body.classList.add('overflow-hidden')
        body.appendChild(modal)
    
}

function cerrarModal () {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

        setTimeout(() => {
            modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
        }, 500);
        
    
}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section => {

            const sectionTop = section.offsetTop
            const sectionHeight= section.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id
            }
        })

        navLinks.forEach(Link =>{
            Link.classList.remove('active')
            if(Link.getAttribute('href') === '#' + actual)
                Link.classList.add('active')
        })
    })
}

function scrollNav() {
    
}
