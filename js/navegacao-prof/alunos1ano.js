'use strict'

// Import das funções
// import{ } from "./funcoes"

function criarTr(aluno){
    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')


    //  Matricula do aluno
    const matricula = document.createElement('th')
    matricula.scope = 'row'
    matricula.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    matricula.textContent = aluno.matricula


    // Nome do aluno
    const nome = document.createElement('td')
    nome.scope = 'row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent = aluno.nome

    // Turma
    const turma = document.createElement('td')
    turma.scope = 'row'
    turma.classList.add()
    turma.textContent = aluno.turma

    // Data de Nascimento
    const data_nascimento = document.createElement('td')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white')
    const data_nascimento_exemplo = aluno.data_nascimento
    data_nascimento.textContent = data_nascimento_exemplo.substring(0,10)


    // E-mail 
    const email = document.createElement('td')
    email.scope = 'row'
    email.classList.add()
    email.textContent = aluno.email

    
    
    // Excluir aluno
// Guardando o id do aluno
    const id = aluno.id
    // Criando o elemento
    const deletar = document.createElement('td')
    deletar.classList.add('px-6', 'py-4')
    const deletarImg = document.createElement('img')
    deletarImg.classList.add('h-deletarh', 'w-deletarw')

    // Imagem de excluir
    deletarImg.src = '/img/deletar.png'
    const deletarBtn = document.createElement('button')
    deletarBtn.id = id
    deletarBtn.onclick = deletarAluno

    // Editar 
    const editar=document.createElement('td')
    editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const editarImg=document.createElement('img')
    editarImg.src='../img/escrever.png'
    editarImg.classList.add('h-deletarh', 'w-deletarw')
    const editarBtn=document.createElement('button')
    editarBtn.id=id
    editarBtn.onclick = editarAluno

    editarBtn.append(editarImg)
    editar.append(editarBtn)
    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)

    tr.append(matricula, nome, turma, data_nascimento_exemplo, email, deletar)
   
    return tr

}


// async function ore