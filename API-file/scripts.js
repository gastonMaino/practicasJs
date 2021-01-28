const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const images = document.getElementById('images')
const text = document.getElementById('text')

// fileInput.addEventListener('change', (e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsText(file)
//     fileReader.addEventListener('load', (e)=>{
//         text.textContent = e.target.result
//     })
// })


//carga simple de imagen
// fileInput.addEventListener('change', (e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener('load', (e)=>{
//         img.setAttribute('src', e.target.result)
//     })
// })


//carga multiple
fileInput.addEventListener('change', (e)=>{
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    for(const file of files){
        const img = document.createElement('IMG')
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', (e)=>{
        img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})