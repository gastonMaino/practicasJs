// https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px)')

const applyMatchMedia = (mql) =>{
    mql.matches ?
    //Nunca
    document.body.style.backgroundColor = 'red'
    :
    //Nunca
    document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize' , () =>{
    applyMatchMedia(mql)
})

addEventListener('DOMContentLoaded' , () =>{
    applyMatchMedia(mql)
})

//applyMatchMedia(mql)