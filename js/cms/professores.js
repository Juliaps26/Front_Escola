'use strict'

// Import das funções

import{ deleteProfessor, getProfessores }from "./urlProfessor.js"
function criarTr(professores){

    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')


    //  Matricula do aluno
    const codigo = document.createElement('td')
    codigo.scope = 'row'
    codigo.classList.add('px-6', 'py-4', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    codigo.textContent = professores.id

    

    // Nome do professor
    const nome = document.createElement('td')
    nome.scope = 'row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent = professores.nome


     // Data de Nascimento
    const data_nascimento = document.createElement('td')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white')
    const data_nascimento_exemplo = professores.data_nascimento
    data_nascimento.textContent = data_nascimento_exemplo.substring(0,10)


    // Telefone

    const telefone = document.createElement('td')
    telefone.scope = 'row'
    telefone.classList.add()
    telefone.textContent = professores.telefone


    // Sexo
    const sexo = document.createElement('td')
    sexo.scope = 'row'
    sexo.classList.add()
    sexo.textContent = professores.sexo[0].nome


     // Excluir o professor
     const id = professores.id

     // Criando elemento
     const deletar = document.createElement('td')
     deletar.classList.add('px-6', 'py-4', 'bg-white')
 
     const deletarImg = document.createElement('img')
     deletarImg.classList.add('h-deletar', 'w-deletarw')
 
 
     // Imagem
     deletarImg.src= '/img/deletar.png'
     const deletarBtn = document.createElement('button')
     deletarBtn.id = id
     deletarBtn.onclick = deletarProfessor
 
     deletarBtn.append(deletarImg)
     deletar.append(deletarBtn)
 
 
     // Editar Prof
     const editar = document.createElement('td')
     editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
 
     const editarImg = document.createElement('img')
     editarImg.src = '/img/editar.png'
     editarImg.classList.add('h-fotoW', 'w-fotoW')
 
     const editarBtn = document.createElement('button')
     editarBtn.id = id
     editarBtn.onclick = editarProfessor
 
     editarBtn.append(editarImg)
     editar.append(editarBtn)






   
tr.append(codigo, nome, data_nascimento, telefone, sexo, deletar, editar)
    return tr

}


async function preencherTela(){
    const table = document.getElementById('tbody')
    const professores = await getProfessores()
    professores.forEach(professores => {
        const tr = criarTr(professores)
        table.append(tr)
    });

}

// Deletar Professor
async function deletarProfessor(){
    const idProfessor=this.id
    console.log(idProfessor);
    const retorno=    await deleteProfessor(idProfessor)
    console.log(retorno);
}

// Editar
function editarProfessor(){
    localStorage.setItem('idProfessor', this.id)
    window.location.href="/html/editar/prof.html"
}






////// PUT ///////////

    // const inputNome = document.getElementById('nome')
    // const inputNascimento = document.getElementById('nascimento')
    // const inputTelefone = document.getElementById('telefone')
    // const inputSexo = document.getElementById('sexo')

    // const botaoSalvar = document.getElementById('cadastrar')

// function pegarDados() {
//     let JSONProfessores = {
//         nome: inputNome.value,
//         data_nascimento: inputNascimento.value,
//         telefone: inputTelefone.value,
//         sexo: inputSexo.value
//     }

//     if(inputNome == '' || inputNascimento == '' || inputSexo == '' || inputTelefone == ''){
//         return false
//     }else{
//         return JSONProfessores
//     }

    
// }

// async function inserirProfessor(){
//     const dadosProfessor = pegarDados()
//     if(dadosComunicados){
//         const resposta = await postComunicado(dadosComunicados)
//         if(resposta){
//             botaoSalvar.textContent = 'Comunicado inserido com sucesso!'
//         } 
//         else
//             botaoSalvar.textContent = 'Houve um erro!'
//         } else {
//             alert('Preencha todos os campos!')
//         }
//     }

    // botaoSalvar.addEventListener('click', inserirProfessor)

preencherTela()