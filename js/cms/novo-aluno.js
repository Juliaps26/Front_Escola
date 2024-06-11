'use strict'

// Import das funções
import{getAlunos,postAluno} from "./urlAlunos.js"


// Pegando input do link
const inputPosterPreview = document.getElementById('link')

// Pegando a tag img que vai aparecer a foto do link
const imgPosterPreview = document.getElementById('poster')
imgPosterPreview.classList.add('w-capaWidth', 'h-capaHeight')

// Id do botão que vai ser clicado para aparecer a imagem 
const buttonPosterPreview = document.getElementById('button-preview-poster')

const mostrarPreview = () => {
    const link = inputPosterPreview.value
    imgPosterPreview.src = link

}

buttonPosterPreview.addEventListener('click', mostrarPreview)




// Pegando os inputs paraa inserir o aluno
const inputNome = document.getElementById('nome')
const inputDataNascimento = document.getElementById('data')
const inputEmail = document.getElementById('email')
const inputCEP = document.getElementById('cep')
const inputLogradouro = document.getElementById('logradouro')
const inputNumero = document.getElementById('numero')
const inputBairro = document.getElementById('bairro')
const inputCidade = document.getElementById('cidade')
const inputSexo = document.getElementById('sexo')
const inputCPF = document.getElementById('cpf')

const bntSalvar = document.getElementById('salvar')

function pegarDados() {
    let JSONAluno = {

        nome: inputNome.value,
        data_nascimento: inputDataNascimento.value,
        email : inputEmail.value,
        cpf: inputCPF.value,
        foto: inputPosterPreview.value,
        sexo: inputSexo.value,
        endereco:[
            {
                logradouro: inputLogradouro.value,
                numero: inputNumero.value,
                bairro: inputBairro.value,
                cidade: inputCidade.value,
                cep: inputCEP.value
            }
        ]


    }
  
    // Se  nao preencher 
    if (inputNome.value == '' || inputDataNascimento.value == '' || inputEmail.value == '' ||
     inputCEP.value == '' || inputPosterPreview.value == '' || inputLogradouro.value == ''
     || inputNumero.value == '' || inputBairro.value == '' || inputCidade.value == '' || 
     inputSexo.value == '' || inputCPF.value == ''
    ) {
        return false

    } else {
        return JSONAluno
    }

}

async function inserirAluno() {

    const dadosAluno = pegarDados()
    console.log(dadosAluno)

    if (dadosAluno) {
        const retorno = await postAluno(dadosAluno)
        console.log(retorno)
        if (retorno) {
            bntSalvar.textContent = 'Aluno inserido com sucesso!'
            window.location.href='../../html/navegacao-adm/alunos.html'

        }
        else
           bntSalvar.textContent = 'HOUVE UM ERRO!'
    } else {
        alert('Preencha todos os campos!')
    }

}

bntSalvar.addEventListener('click', inserirAluno)


