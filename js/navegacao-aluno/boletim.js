'use strict'

// Import das funções
// import{ } from "./funcoes"

function criarTr(aluno){
    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')


    //  Matricula do aluno
    const materia = document.createElement('th')
    materia.scope = 'row'
    materia.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    materia.textContent = aluno.materia


    // Nota 1 Etapa
    const nota1 = document.createElement('td')
    nota1.scope = 'row'
    nota1.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nota1.textContent = aluno.nota1

    // Nota 2 Etapa
    const nota2 = document.createElement('td')
    nota2.scope = 'row'
    nota2.classList.add()
    nota2.textContent = aluno.nota2


    // Faltas somadas
    const faltas = document.createElement('td')
    faltas.scope = 'row'
    faltas.classList.add()
    faltas.textContent = aluno.faltas
   

    // Situação
    const situacao = document.createElement('td')
    situacao.scope = 'row'
    situacao.classList.add()
    situacao.textContent = aluno.situacao

   
// Guardando o id do aluno
    const id = aluno.id
   


    tr.append()
   
    return tr

}

