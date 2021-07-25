const c = (cs) => document.querySelector(cs)
const btnCategoria = c('.btn-categoria')
const categoria = c('#modalAdicionar');
const btnCancelarCategoria = c('.btn-cancelar-categoria')
const btnCancelarCategoriaAlterar = c('.btn-cancelar-categoriaAlterar')
const alterarCategoria = c('#modalAlterar');
const modalRemover = c('#modalRemover')
const btnCancelarCategoriaRemover = c('.btn-cancelar-categoriaRemover')
const modalAlerta = c('#modalAlerta')
const cancelarAlerta = c('#cancelarAlerta')
const modalProgress = c('#modalProgress')
const salvarCategoria = c('.btn-salvar-categoria')


/********MODAL ADD CATEGORIA******** */
btnCategoria.addEventListener('click', () => {
    abrirModal(categoria)
})

btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(categoria)
})

salvarCategoria.addEventListener('click', () => {

    const condicao = true
    if(condicao) {
        console.log('Salvando categoria...');
    }
    
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
