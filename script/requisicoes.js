const db = firebase.firestore()

/*db.collection("categorias").doc('1').get().then((doc) => {
    
    if(doc.exists){
        
        const dados = doc.data()

        const nome = dados.nome

        console.log(nome);

    } else {
        console.log('Não existe');
    }

});*/

db.collection("categorias").onSnapshot((documentos) => {

    documentos.docChanges().forEach(changes => {

        if (changes.type === 'added') {

            const documento = changes.doc

            const dados = documento.data()

            const key = documento.id

            console.log(`Nome da pasta ${key}`);

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