const c = (cs) => document.querySelector(cs)
const cs = (cs) => document.querySelector(cs)
const btnCategoria = c('.btn-categoria')
const categoria = c('#modalAdicionar');
const btnCancelarCategoria = c('.btn-cancelar-categoria')
const btnCancelarCategoriaAlterar = c('.btn-cancelar-categoriaAlterar')
const alterarCategoria = c('#modalAlterar');
const modalRemover = c('#modalRemover')
const btnCancelarCategoriaRemover = c('.btn-cancelar-categoriaRemover')
const btnRemoveCategoria = c('#btnRemoveCategoria')
const modalAlerta = c('#modalAlerta')
const cancelarAlerta = c('#cancelarAlerta')
const modalProgress = c('#modalProgress')
const tbody = c('#tbody');
const salvarCategoria = c('.btn-salvar-categoria')
const btnSucess = cs('.btn-sucess')
const maxRows = c('#maxRows');
const alertamensage = c('#alertamensage');
const id = c('#adicionarId')
const nome = c('#adicionarNome')
let keyList = []
const btnSalvarCategoriaAlterar = c('.btn-salvar-categoriaAlterar')
let categoriaSelecionadaAlterar;
let categoriaSelecionadaRemover;


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
    clearFields(id, nome)
})

//------Função de adicionar categoria
salvarCategoria.addEventListener('click', () => {
    const verifieldId = id.value.trim()
    const verifieldName = nome.value.trim()

    const confirm = keyList.indexOf(Number(verifieldId))

    if(confirm > -1){

        abrirModal(modalAlerta)
        alertamensageText('ID já está cadastrado no sistema')

    } else if (verifieldId !== '' && verifieldId >= 1 && verifieldName !== '') {

        abrirModalflex(modalProgress)

        addCategoriasBd(verifieldId, verifieldName)

        clearFields(id, nome)

    } else {
        abrirModal(modalAlerta)
        alertamensageText('Os campos não podem estar vazios')
    }


})


//------MODAL ALTERAR CATEGORIA
function abrirModalAlterar(dados) {
    abrirModal(alterarCategoria)
    
    const id = document.getElementById('IdAlterar')
    const nome = document.getElementById('NomeAlterar')

    id.value = dados.id
    nome.value = dados.nome

    categoriaSelecionadaAlterar = dados.nome
    
}



btnSalvarCategoriaAlterar.addEventListener('click', () => {

    const id = document.getElementById('IdAlterar').value
    const nome = document.getElementById('NomeAlterar').value

    if(nome.trim() === ''){

        abrirModal(modalAlerta)
        alertamensageText('O campo nome não pode está vazio!')

    } 
    else if (nome === categoriaSelecionadaAlterar){

        abrirModal(modalAlerta)
        alertamensageText(`Nenhuma informação pode se alterado <br> verifique os dados e tente novamente`)

    }
    else{
        abrirModalflex(modalProgress)
        alterarCategoriasBd(id, nome.trim())
    }

})

btnCancelarCategoriaAlterar.addEventListener('click', () => {

    const id = document.getElementById('IdAlterar')
    const nome = document.getElementById('NomeAlterar')

    clearFields(id, nome)
    fecharModal(alterarCategoria)
})



//-------------------------MODAL REMOVER CATEGORIA---------------------------------//
function abrirModalRemover(dados) {
    abrirModal(modalRemover)

    categoriaSelecionadaRemover = dados
}

btnRemoveCategoria.addEventListener('click', () => {
    
    abrirModalflex(modalProgress)

    removerCategoriasBd()

})

btnCancelarCategoriaRemover.addEventListener('click', () => {
    fecharModal(modalRemover)
})



//------------------------MODAL ALERTA--------------------------//
const alertamensageText = (text) => {
    alertamensage.innerHTML = text
}

cancelarAlerta.addEventListener('click', () => {
    fecharModal(modalAlerta)
})

const abrirModal = (element) => {
    element.style.display = 'block';
}
const abrirModalflex = (element) => {
    element.style.display = 'flex';
}

const fecharModal = (element) => {
    element.style.display = 'none'
}


//--------------------------TABELA----------------------------------//

const addDadosTabela = (dados) => {

    const linha = tbody.insertRow();

    const colunaId = linha.insertCell(0);
    const colunaNome = linha.insertCell(1)
    const colunaAcoes = linha.insertCell(2)

    const idThis = document.createTextNode(dados.id)
    const nomeThis = document.createTextNode(dados.nome)

    colunaId.appendChild(idThis)
    colunaNome.appendChild(nomeThis)

    createButtonTable(colunaAcoes, dados)

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

    tr = tbody.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {

        if (i > maxLinhas) {

            tr[i].style.display = 'none'

        } else {

            tr[i].style.display = ''
        }
    }
})


//------Atualizando dados Alterados-------//
const atualizaDadosAlterados = (dados) => {
    const index = keyList.indexOf(dados.id)


    const row = tbody.rows[index]

    const cellId = row.cells[0]
    const cellNome = row.cells[1]
    const acoes = row.cells[2]
    acoes.remove()

    const colunaAcoes = row.insertCell(2)

    cellId.innerHTML = dados.id
    cellNome.innerHTML = dados.nome

    createButtonTable(colunaAcoes, dados)
}

//------Função para criar butões de ações da tabela
const createButtonTable = (colunaAcoes, dados) => {

    const buttonAlterar = document.createElement('button')
    buttonAlterar.innerHTML = `<i class="fas fa-edit"></i>`
    buttonAlterar.className = 'btn btn-sucess'

    const buttonRemover = document.createElement('button')
    buttonRemover.innerHTML = `<i class="fas fa-trash-alt">`
    buttonRemover.className = 'btn btn-danger'

    buttonAlterar.onclick = () => abrirModalAlterar(dados)
    buttonRemover.onclick = () => abrirModalRemover(dados)

    colunaAcoes.appendChild(buttonAlterar)
    colunaAcoes.appendChild(document.createTextNode(' '))
    colunaAcoes.appendChild(buttonRemover)
}