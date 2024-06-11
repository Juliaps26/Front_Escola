'use strict'

// Import das funções
import{deleteAluno, getAlunos, getTurmas, postAluno, putAluno} from "./urlAlunos.js"



function criarTr(aluno){
    console.log(aluno);

    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')


    //  Matricula do aluno
    const matricula = document.createElement('td')
    // matricula.scope = 'row'
    matricula.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    matricula.textContent = aluno.id

     
    const foto = document.createElement('td')
    const foto_aluno= document.createElement('img')
    foto_aluno.classList.add('h-fotoAlunoW', 'w-fotoAlunoH')
    foto_aluno.src = aluno.foto
    


    // Nome do aluno
    const nome = document.createElement('td')
    nome.scope = 'row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent = aluno.nome


//     // Data de Nascimento
    const data_nascimento = document.createElement('td')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white')
    const data_nascimento_exemplo = aluno.data_nascimento
    data_nascimento.textContent = data_nascimento_exemplo.substring(0,10)


//     // E-mail 
    const email = document.createElement('td')
    email.scope = 'row'
    email.classList.add()
    email.textContent = aluno.email

    // Sexo

    const sexo = document.createElement('td')
    sexo.scope = 'row'
    sexo.classList.add()
    sexo.textContent = aluno.sexo[0].nome

    // Excluir o aluno 
    const id = aluno.id

    // Criando elemento
    const deletar = document.createElement('td')
    deletar.classList.add('px-6', 'py-4', 'bg-white')

    const deletarImg = document.createElement('img')
    deletarImg.classList.add('h-deletar', 'w-deletarw')


    // Imagem
    deletarImg.src= '/img/deletar.png'
    const deletarBtn = document.createElement('button')
    deletarBtn.id = id
    deletarBtn.onclick = deletarAluno

    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)


    // Editar aluno
    const editar = document.createElement('td')
    editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')

    const editarImg = document.createElement('img')
    editarImg.src = '/img/editar.png'
    editarImg.classList.add('h-fotoW', 'w-fotoW')

    const editarBtn = document.createElement('button')
    editarBtn.id = id
    editarBtn.onclick = editarAluno

    editarBtn.append(editarImg)
    editar.append(editarBtn)





    


tr.append(matricula, foto_aluno, nome, data_nascimento, email, sexo, deletar, editar)
   
    return tr

}


async function preencherTela(){
    const table = document.getElementById('tbody')
    const alunos = await getAlunos()
    alunos.forEach(aluno => {
        const tr = criarTr(aluno)
        table.append(tr)
    });

}

//  Função para deletar aluno
async function deletarAluno(){
    const idAluno=this.id
    console.log(idAluno);
    const retorno=    await deleteAluno(idAluno)
    console.log(retorno);
}

// Editar
function editarAluno(){
    localStorage.setItem('idAluno', this.id)
    window.location.href="/html/editar/aluno.html"
}




preencherTela()
