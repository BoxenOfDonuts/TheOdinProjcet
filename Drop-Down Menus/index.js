const more = document.querySelector('.button')
more.addEventListener('click', (e) => {
    document.querySelector('.dropdown-content').classList.toggle('active')
})