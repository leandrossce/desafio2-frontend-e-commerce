
import {clienteService} from '../service/validacaoCadastro.js'
import {encriptarDesencriptar} from '../encriptar.js'




const formulario = document.querySelector('[data-form]')
const clique = document.querySelector('[data-button]')

clique.addEventListener('click', async (evento) => {
  evento.preventDefault()

  var loginSucesso = false
    
  try {
    
    const senha = document.getElementById('data-senha').value
    const email = document.getElementById('data-email').value

    

    const listaClientes = await clienteService.listaClientes()

        listaClientes.forEach(elemento => {


            if(elemento.email == email&&senha==encriptarDesencriptar.desencriptarTexto(elemento.senha)){
            alert("Login efetuado com sucesso!")
            loginSucesso = true
            window.location.href = 'loja.html'
            return
            }


        })

        if(!loginSucesso)
        alert("Erro no login! Digite corretamente as suas credenciais.")

    }


        catch (erro) {
            console.log(erro)
        // window.location.href = "../telas/erro.html"
        alert("Erro!")
        window.location.href = '../index.html'
        }

}


)





