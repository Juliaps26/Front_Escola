// Importa a função para obter os comunicados do arquivo urlComunicados.js
import { getComunicados } from "./urlComunicados.js";

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
    descricao.textContent = comunicado.descricao;
    descricao.className = 'descricao';
    card.appendChild(descricao);

    // Criando contêiner para data e horário
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';

    // Criando elemento para a data se tiver ou não
    if (comunicado.data) {
        const data = document.createElement('p');
        data.className = 'data';
        data.textContent = `Data: ${comunicado.data}`;
        dateTimeContainer.appendChild(data);
    }

    // Criando elemento para o horário se tiver ou não
    if (comunicado.horario) {
        const horario = document.createElement('p');
        horario.className = 'horario';
        horario.textContent = `Horário: ${comunicado.horario}`;
        dateTimeContainer.appendChild(horario);
    }

    // Adiciona o contêiner de data e horário ao card
    card.appendChild(tema);

    return card;
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