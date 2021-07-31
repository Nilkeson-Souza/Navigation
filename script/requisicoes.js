const bd = firebase.firestore()

//------Função que possibilita adicionar categorias no banco------//
const addCategoriasBd = (verifieldId, verifieldName) => {

    const idNumber = Number(verifieldId)

    bd.collection('categorias').doc(verifieldId).set({
        id: idNumber,
        nome: verifieldName
    })
    .then(()=> {
        fecharModal(modalProgress)
        console.log('Sucesso em adicionar categoria');
    })
    .catch((error) => {
        console.log('Error ao adicionar categoria' +error);
    })
}


//----------Esculta todas alteração que houver nos documentos---------// 
bd.collection("categorias").orderBy('id', 'asc').onSnapshot((documentos) => {

    documentos.docChanges().forEach(changes => {

        if (changes.type === 'added') {

            const documento = changes.doc

            const dados = documento.data()

            addDadosTabela(dados)

        }
        else if (changes.type === 'modified') {

            const documento = changes.doc

            const dados = documento.data()

            const key = documento.id

            console.log(`Nome da pasta ${key}`);

        }
        else if (changes.type === 'removed') {

            const documento = changes.doc

            const dados = documento.data()

            const key = documento.id

            console.log(`Nome da pasta ${key}`);

        }

    });

});