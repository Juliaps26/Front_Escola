// Importa a função para obter os comunicados do arquivo urlComunicados.js
import { getComunicados, postComunicado } from "./urlComunicados.js";


// Pegando os inputs

const inputTema = document.getElementById('tema')
const inputDescricao = document.getElementById('descricao')
const inputData = document.getElementById('data')


const botaoSalvar = document.getElementById('cadastrar')

// Função para pegar os dados
function pegarDados(){
    let JSONcomunicados = {
        assunto: inputTema.value,
        data: inputData.value,
        mensagem: inputDescricao.value
    }

    // Se não preencher
    if(inputTema.value == '' || inputData.value == '' || inputDescricao.value == ''){
        return false
    } else{
        return JSONcomunicados
    }
}

// Função para inserir um novo comunicado

async function inserirComunicado(){
    const dadosComunicados = pegarDados()
    if(dadosComunicados){
        const resposta = await postComunicado(dadosComunicados)
        if(resposta){
            botaoSalvar.textContent = 'Comunicado inserido com sucesso!'
            window.location.href = "../../html/navegacao-adm/comunicados.html"
        } 
        else
            botaoSalvar.textContent = 'Houve um erro!'
        } else {
            alert('Preencha todos os campos!')
        }
    }


    

// Função para criar um card
function createCard(comunicado) {
    // Cria o elemento div para o card
    const card = document.createElement('div');
    card.className = 'card';

    // Cria o elemento para o tema
    const tema = document.createElement('h3');
    tema.textContent = comunicado.assunto;
    card.appendChild(tema)

    // Cria o elemento para a descricao
    const descricao = document.createElement('p');
    console.log(comunicado);
    descricao.textContent = comunicado.mensagem;
    descricao.className = 'descricao';
    card.appendChild(descricao);

    const data = document.createElement('p');
    data.textContent = `Data: ${formatarData(comunicado.data)}`;
    data.className = 'data';
    card.appendChild(data);


    // Adiciona o contêiner de data e horário ao card
    card.appendChild(tema,descricao,data);

    return card;
}


function formatarData(dataString) {
    const dataObj = new Date(dataString);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Os meses são base 0, então adicionamos 1
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`; // Formato DD/MM/AAAA
}

// Função para buscar os comunicados do banco de dados e criar os cards
async function fetchComunicados() {
    try {
        // Seleciona o contêiner dos cards
        const container = document.getElementById('cards-container');

        // Obtém os comunicados usando a função getComunicados
        const comunicados = await getComunicados();
        console.log(comunicados);

        // Adiciona os cards ao contêiner
        comunicados.forEach(comunicado => {
            console.log(comunicado);
            const card = createCard(comunicado);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar comunicados:', error);
    }
}

// Chama a função para buscar os comunicados e criar os cards
fetchComunicados();

botaoSalvar.addEventListener('click', inserirComunicado)