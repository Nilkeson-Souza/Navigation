const toggle = document.querySelector('.toggle')
const sidebar = document.querySelector('.sidebar')
const titleH3 = document.querySelector('.title-h3')
const ulSubMenu = document.querySelector('.toggle-profile')
const ulSubMenuProfile = document.querySelector('.ul-sub-menu-profile')
const liA = document.querySelector('#li-a')
const btnCategoria = document.querySelector('.btn-categoria')
const categoria = document.querySelector('#modalAdicionar');
const btnCancelarCategoria = document.querySelector('.btn-cancelar-categoria')
const btnCancelarCategoriaAlterar = document.querySelector('.btn-cancelar-categoriaAlterar')
const alterarCategoria = document.querySelector('#modalAlterar');
const modalRemover = document.querySelector('#modalRemover')
const btnCancelarCategoriaRemover = document.querySelector('.btn-cancelar-categoriaRemover')
const modalAlerta = document.querySelector('#modalAlerta')
const cancelarAlerta = document.querySelector('#cancelarAlerta')
const modalProgress = document.querySelector('#modalProgress')


ulSubMenu.addEventListener('click', () => {
    ulSubMenuProfile.classList.toggle('show')
})

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
    titleH3.classList.toggle('active')
    liA.classList.toggle('active')
})

/********MODAL ADD CATEGORIA******** */
btnCategoria.addEventListener('click', () => {
    abrirModal(categoria)
})

btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(categoria)
})

/********MODAL ALTERAR CATEGORIA******** *
btnCategoria.addEventListener('click', () => {
    abrirModal(alterarCategoria)
})

btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(alterarCategoria)
})*/

/********MODAL REMOVER CATEGORIA******** 
btnCategoria.addEventListener('click', () => {
    abrirModal(modalRemover)
})

btnCancelarCategoriaRemover.addEventListener('click', () => {
    fecharModal(modalRemover)
})*/

/********MODAL ALERTA********
btnCategoria.addEventListener('click', () => {
    abrirModal(modalAlerta)
})

cancelarAlerta.addEventListener('click', () => {
    fecharModal(modalAlerta)
})
*/

/**********MODAL PROGRESS********** *
btnCategoria.addEventListener('click', () => {
    abrirModalflex(modalProgress)
})

btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(modalProgress)
})*/

const abrirModal = (element) => {
    element.style.display = 'block';
}
const abrirModalflex = (element) => {
    element.style.display = 'flex';
}

const fecharModal = (element) => {
    element.style.display = 'none'
}
