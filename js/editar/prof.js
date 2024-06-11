'use strict'

import { getProfessorById, putProfessor} from "../cms/urlProfessor.js"


localStorage.getItem('idProfessor')


const salvar = document.getElementById('salvar')

async function inserirDados(){
    let professor = await getProfessorById(localStorage.getItem('idProfessor'))

    console.log(professor);


    const nome = document.getElementById('nome')
    nome.value = professor.nome

    const data_nascimento = document.getElementById('data')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white')
    const data_nascimento_exemplo = professor.data_nascimento
    data_nascimento.value = data_nascimento_exemplo.substring(0,10)

  

    const telefone = document.getElementById('telefone')
    telefone.value = professor.telefone

    const sexo = document.getElementById('sexo')
    sexo.value = professor.sexo[0].id


}

async function pegarDados(){
    let professor =await getProfessorById(localStorage.getItem('idProfessor'))
    const JSONProfessor={}

    const nome =document.getElementById('nome').value
    JSONProfessor.nome = nome

    const data = document.getElementById('data').value
    JSONProfessor.data_nascimento = data

    const telefone =document.getElementById('telefone').value
    JSONProfessor.telefone = telefone

    const sexo = document.getElementById('sexo')
    JSONProfessor.id_sexo = sexo.value
console.log(JSONProfessor);
   
    return JSONProfessor
}

async function atualizarProfessor(){
    const dadosProfessor =await pegarDados()
    console.log(dadosProfessor)
    console.log(localStorage.getItem('idProfessor'));
    const retorno = await putProfessor (dadosProfessor , localStorage.getItem('idProfessor'))
    console.log(retorno)
    if(retorno){
        salvar.textContent='Professor atualizado com sucesso!!'
        window.location.href='../../html/navegacao-adm/professores.html'
    }
    else
    salvar.textContent='Não foi possivel atualizar!'
}

salvar.addEventListener('click', atualizarProfessor)

inserirDados()