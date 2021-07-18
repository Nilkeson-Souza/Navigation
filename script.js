const toggle = document.querySelector('.toggle')
const sidebar = document.querySelector('.sidebar')
const titleH3 = document.querySelector('.title-h3')
const ulSubMenu = document.querySelector('.toggle-profile')
const ulSubMenuProfile = document.querySelector('.ul-sub-menu-profile')
const liA = document.querySelector('#li-a')



ulSubMenu.addEventListener('click', () => {
    ulSubMenuProfile.classList.toggle('show')
})

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
    titleH3.classList.toggle('active')
    liA.classList.toggle('active')
})
