let closeButton = document.querySelector('.button-close')
let menuButton = document.querySelector('.button-menu')
let sidebar = document.querySelector('.sidebar')

closeButton.addEventListener('click', toggleSidebarVisibility)

menuButton.addEventListener('click', toggleSidebarVisibility)

function toggleSidebarVisibility() {
    sidebar.classList.toggle('sidebar--active')
}