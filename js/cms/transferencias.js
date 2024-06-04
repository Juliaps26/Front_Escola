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


    // Foto do Aluno



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

   

    // E-mail 
    const email = document.createElement('td')
    email.scope = 'row'
    email.classList.add()
    email.textContent = aluno.email


    // Retornar o historio de transferencias

    
    
    // Excluir aluno
// Guardando o id do aluno
    const id = aluno.id
    
    

    tr.append(matricula, nome, turma,email)
   
    return tr

}

