const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault();
    console.log('Drag over');
})

dropZone.addEventListener('drop', (e)=>{
    e.preventDefault();
    console.log('drop');
})