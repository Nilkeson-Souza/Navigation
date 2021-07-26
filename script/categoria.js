const c = (cs) => document.querySelector(cs)
const cs = (cs) => document.querySelector(cs)
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
const btnSucess = cs('.btn-sucess')


//-----------------------------MODAL ADD CATEGORIA--------------------------------------//

//-------------FUNÇÃO DE LIMPAR CAMPOS---------------//
const clearFields = (id, name) => {
    id.value = ''
    name.value = ''
}

//-------------ABRIR MODAL CATEGORIA
btnCategoria.addEventListener('click', () => {
    abrirModal(categoria)
})
//-------------FECHAR MODAL CATEGORIA
btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(categoria)
})

//------FUNÇÃO DE ESCULTA DO ADICIONAR CATEGORIA--------//
salvarCategoria.addEventListener('click', () => {

    const id = c('#adicionarId')
    const name = c('#adicionarNome')
    const verifieldId = id.value.trim()
    const verifieldName = name.value.trim()

    if (verifieldId !== '' && verifieldName !== '') {
        
        alert(`ID ${id.value}: ${name.value}`)
        clearFields(id, name)

    } else {
        alert('Os campos não podem estar vazios')
    }
    

})


/********MODAL ALTERAR CATEGORIA******** */
btnSucess.addEventListener('click', () => {
    abrirModal(alterarCategoria)
})

btnCancelarCategoriaAlterar.addEventListener('click', () => {
    fecharModal(alterarCategoria)
})

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
