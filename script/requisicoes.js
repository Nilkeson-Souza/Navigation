const bd = firebase.firestore()

//------Função que possibilita adicionar categorias no banco------//
const addCategoriasBd = (verifieldId, verifieldName) => {

    const idNumber = Number(verifieldId)
    const dados = {

        id: idNumber,
        nome: verifieldName

    }

    bd.collection('categorias').doc(verifieldId).set(dados)
        .then(() => {

            abrirModal(modalAlerta)
            alertamensageText('Sucesso ao salvar dados')
            fecharModal(modalProgress)

        })
        .catch((error) => {

            alertamensageText('Erro ao salvar dados: '+ error)

        })
}

//------Função que possibilita ALTERAR categorias no banco------//
const alterarCategoriasBd = (id, nome) => {

    const idNumber = Number(id)
    const dados = {

        id: idNumber,
        nome: nome

    }

    bd.collection('categorias').doc(id).update(dados)
        .then(() => {
            clearFields(id, nome)
            abrirModal(modalAlerta)
            alertamensageText('Sucesso em alterar dados')
            fecharModal(modalProgress)
            fecharModal(alterarCategoria)

        })
        .catch((error) => {
            fecharModal(modalProgress)
            alertamensageText('Erro em alterar dados: ' + error)

        })
}

//----------Esculta todas alteração que houver nos documentos---------// 
bd.collection("categorias").orderBy('id', 'asc').onSnapshot((documentos) => {

    documentos.docChanges().forEach(changes => {

        if (changes.type === 'added') {

            const documento = changes.doc

            const dados = documento.data()

            keyList.push(dados.id)

            addDadosTabela(dados)

        }
        else if (changes.type === 'modified') {

            const documento = changes.doc

            const dados = documento.data()

            atualizaDadosAlterados(dados)

        }
        else if (changes.type === 'removed') {

            const documento = changes.doc

            const dados = documento.data()

            const key = documento.id

            console.log(`Nome da pasta ${key}`);

        }

    });

});