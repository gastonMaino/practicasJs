const video = document.getElementById('video')

// addEventListener('visibilitychange', (e) =>{
//     if(document.visibilityState === 'visible'){
//         video.play()
//     }else if(document.visibilityState === 'hidden'){
//         video.pause()
//     }
// })

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())