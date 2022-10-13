const listaClientes = () =>  {
    return fetch(`https://leandrossce.github.io/desafio2-frontend-e-commerce/db.json`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaUsuario = (senha,email) => { 
    return fetch(`https://leandrossce.github.io/desafio2-frontend-e-commerce/db.json`, {
        method: 'POST',         //enviar os dados (postar)
        headers: {                      // qual tipo de informação está enviando?
            'Content-Type' : 'application/json'     
        },
        body: JSON.stringify({      // transforma para o objeti apropriado
            senha: senha,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => { 
    return fetch(`https://leandrossce.github.io/desafio2-frontend-e-commerce/db.json/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaUsuario = (id) => { 
    return fetch(`https://leandrossce.github.io/desafio2-frontend-e-commerce/db.json/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaUsuario = (id, senha, email) => {
    return fetch(`https://leandrossce.github.io/desafio2-frontend-e-commerce/db.json/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            senha: senha, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaUsuario,
    removeCliente,
    detalhaUsuario,
    atualizaUsuario
}

