import { clienteService } from '../service/validacaoCadastro.js'
import {encriptarDesencriptar} from '../encriptar.js'



const formulario = document.querySelector('[data-form]')
const clique = document.querySelector('[data-button]')
var seguirCadastro = true
clique.addEventListener('click', async (evento) => {
  evento.preventDefault()
  try {
    


    const senha = document.getElementById('data-senha').value
    const email = document.getElementById('data-email').value

    
    const listaClientes = await clienteService.listaClientes()

        listaClientes.forEach(elemento => {
            if(elemento.email == email){
            seguirCadastro = false
            }


        })

    if(seguirCadastro){
    await clienteService.criaUsuario(encriptarDesencriptar.encriptarTexto(senha), email)
    alert("Usuario cadastrado com sucesso!")
    window.location.href = 'index.html'}
    else{
      alert("Usuário já cadastrado! Informe um novo e-mail.")
    }
  }
  catch (erro) {
    console.log(erro)
   // window.location.href = "../telas/erro.html"
   alert("Erro!")
   window.location.href = 'index.html'
  }
})