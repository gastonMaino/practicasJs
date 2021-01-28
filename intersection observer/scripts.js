const boxes = document.querySelectorAll('.box')

const callback = (entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target.id)
        }
    })
}

const options = {
    //root: el padre (por default viewport) que queremos vigilar de la ventana.
    //rootMargin:   funciona igual que en css y recibe de 1 a 4 parametros
    //threshold: recibe valores entre 0 y 1, hasta que parte es necesariover para contar  como        intrceptado tambien cuenta hasta el 25% de ocultos
}

const observer = new IntersectionObserver(callback, options)
boxes.forEach(element => observer.observe(element) )