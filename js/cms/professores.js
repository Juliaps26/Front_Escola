'use strict'

// Import das funções
import{deleteProfessor, getProfessores, postProfessor} from "./urlProfessores.js"

function criarTr(professores){

    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')


    //  Matricula do aluno
    const codigo = document.createElement('td')
    // matricula.scope = 'row'
    codigo.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    codigo.textContent = professores.id

    

    // Nome do aluno
    const nome = document.createElement('td')
    nome.scope = 'row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent = professores.nome

    // Turma
    // const turma = document.createElement('td')
    // turma.scope = 'row'
    // turma.classList.add()
    // turma.textContent = aluno.

//     // Data de Nascimento
    const data_nascimento = document.createElement('td')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white')
    const data_nascimento_exemplo = professores.data_nascimento
    data_nascimento.textContent = data_nascimento_exemplo.substring(0,10)


//     // telefone
    const telefone = document.createElement('td')
    telefone.textContent = professores.telefone

   

    const sexo = document.createElement('td')
    sexo.textContent = professores.id_sexo




   
tr.append(codigo, nome, data_nascimento, telefone, sexo)
    return tr

}


async function preencherTela(){
    const table = document.getElementById('tbody')
    const professores = await getProfessores()
    professores.forEach(professor => {
        const tr = criarTr(professores)
        table.append(tr)
    });

}



////// PUT ///////////

    const inputNome = document.getElementById('nome')
    const inputNascimento = document.getElementById('nascimento')
    const inputTelefone = document.getElementById('telefone')
    const inputSexo = document.getElementById('sexo')

    const botaoSalvar = document.getElementById('cadastrar')

function pegarDados() {
    let JSONProfessores = {
        nome: inputNome.value,
        data_nascimento: inputNascimento.value,
        telefone: inputTelefone.value,
        sexo: inputSexo.value
    }

    if(inputNome == '' || inputNascimento == '' || inputSexo == '' || inputTelefone == ''){
        return false
    }else{
        return JSONProfessores
    }

    
}

async function inserirProfessor(){
    const dadosProfessor = pegarDados()
    if(dadosComunicados){
        const resposta = await postComunicado(dadosComunicados)
        if(resposta){
            botaoSalvar.textContent = 'Comunicado inserido com sucesso!'
        } 
        else
            botaoSalvar.textContent = 'Houve um erro!'
        } else {
            alert('Preencha todos os campos!')
        }
    }

    botaoSalvar.addEventListener('click', inserirProfessor)

preencherTela()