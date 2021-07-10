let nav = document.querySelector('#header nav')
let toggle = document.querySelectorAll('nav .toggle')

for(let element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

let links = document.querySelectorAll('nav ul li a') 

for(let link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}