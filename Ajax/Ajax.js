
const button = document.getElementById('button');

button.addEventListener('click', () =>{
    let xhr;
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject('Microsoft.XMLHTTP');

    xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) =>{
        const infoUsers = JSON.parse(data.target.response); 

        const LIST = document.getElementById('list');
        for( const infoUser of infoUsers){
            const LISTitem = document.createElement('LI');
            LISTitem.textContent = `${infoUser.id} - ${infoUser.name}`;
            LIST.appendChild(LISTitem); 
        }


    })

    xhr.send()
})