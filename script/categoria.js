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
const maxRows = c('#maxRows');


//-----------------------------MODAL -------------------------------------//

//--Funcão de limpar campos
const clearFields = (id, name) => {
    id.value = ''
    name.value = ''
}

//--Abrir Add modal categoria
btnCategoria.addEventListener('click', () => {
    abrirModal(categoria)
})
//-------------Fechar modal categoria
btnCancelarCategoria.addEventListener('click', () => {
    fecharModal(categoria)
})

//------Função de adicionar categoria
salvarCategoria.addEventListener('click', () => {

    const id = c('#adicionarId')
    const name = c('#adicionarNome')
    const verifieldId = id.value.trim()
    const verifieldName = name.value.trim()

    if (verifieldId !== '' && verifieldName !== '') {

        abrirModalflex(modalProgress)

        addCategoriasBd(verifieldId, verifieldName)

        clearFields(id, name)

    } else {
        alert('Os campos não podem estar vazios')
    }


})


//------MODAL ALTERAR CATEGORIA
function abrirModalAlterar() {
    abrirModal(alterarCategoria)
}

btnCancelarCategoriaAlterar.addEventListener('click', () => {
    fecharModal(alterarCategoria)
})

/********MODAL REMOVER CATEGORIA********/
function fecharModalRemover() {
    abrirModal(modalRemover)
}

btnCancelarCategoriaRemover.addEventListener('click', () => {
    fecharModal(modalRemover)
})

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

//--------------------------Tabela----------------------------------//

const tbody = c('#tbody');



const addDadosTabela = (dados) => {

    const linha = tbody.insertRow();

    const colunaId = linha.insertCell(0);
    const colunaNome = linha.insertCell(1)
    const colunaAcoes = linha.insertCell(2)

    const idThis = document.createTextNode(dados.id)
    const nomeThis = document.createTextNode(dados.nome)

    colunaId.appendChild(idThis)
    colunaNome.appendChild(nomeThis)

    const buttonAlterar = document.createElement('button')
    buttonAlterar.innerHTML = `<i class="fas fa-edit"></i>`
    buttonAlterar.className = 'btn btn-sucess'

    const buttonRemover = document.createElement('button')
    buttonRemover.innerHTML = `<i class="fas fa-trash-alt">`
    buttonRemover.className = 'btn btn-danger'

    buttonAlterar.onclick = () => abrirModalAlterar()
    buttonRemover.onclick = () => fecharModalRemover()

    colunaAcoes.appendChild(buttonAlterar)
    colunaAcoes.appendChild(document.createTextNode(' '))
    colunaAcoes.appendChild(buttonRemover)
}

//--------Funções da tabela---------//

const pesquisar = (opcao) => {

    const inputValor = c('#pesquisar'+opcao)
    let filtro, tr, td, i, valorItemTabela;


    filtro = inputValor.value.toUpperCase()
    tr = tbody.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[opcao]

        if (td) {
            valorItemTabela = td.innerHTML.toUpperCase()
            const verifieldValor = valorItemTabela.indexOf(filtro) == -1

            if (verifieldValor) {
                tr[i].style.display = 'none'
            } else {
                tr[i].style.display = ''
            }
        }
    }
}

//-------Max rows------//
maxRows.addEventListener('change', () => {
    
    let tr, i, maxLinhas
    maxLinhas = Number(maxRows.value) -1

    console.log(maxLinhas);

    tr = tbody.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {

        if (i > maxLinhas) {

            tr[i].style.display = 'none'

        } else {

            tr[i].style.display = ''
        }
    }
})