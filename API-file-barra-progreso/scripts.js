const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

// fileInput.addEventListener('change', (e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e)=>{
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
//     })
// })

const root = document.documentElement
fileInput.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e)=>{
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%' )
    })
})