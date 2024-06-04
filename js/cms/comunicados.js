'use strict'
const comunicados = [
    { tema: 'Reunião de Pais', descricao: 'É com muito prazer que anunciamos nossa 1 reunião para o ensino médio', data: '26/12/24', horario: '08:00' },
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Transferências', descricao: 'Comunicamos que a partir da semana que vem será possivel realizar transferências' ,data: '26/12/24', horario: '08:00' },
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'},
    { tema: 'Material Escolar', descricao: 'A lista de materiais já está disponivel para comprar'}
];

// Função para criar um card
function createCard(comunicado) {
    // Cria o elemento div para o card
    const card = document.createElement('div');
    card.className = 'card';

    // Cria o elemento para o tema
    const tema = document.createElement('h3');
    tema.textContent = comunicado.tema;
    card.appendChild(tema);

    // Cria o elemento para a descricao
    const descricao = document.createElement('p');
    descricao.textContent = comunicado.descricao
    descricao.className = 'descricao'
    // descricao.textContent = `Descrição : ${comunicado.descricao}`;
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
   card.appendChild(dateTimeContainer);

  

    // Criando botão para excluir
    // const excluir = document.createElement('td')
    // excluir.classList.add('bg-white')
    // const excluirImg = document.createElement('img')
    // excluirImg.classList.add()

    // Imagem
    // excluirImg.src='/img/deletar.png'
    // const excluirBtn = document.createElement('button')
    // excluirBtn.id = id
    // excluirBtn.onclick = deletarComunicado


    // Criando botão de editar
    // const editar = document.createElement('td')
    // editar.classList.add()
    // const editarImg = document.createElement('img')
    // editarImg.src = '/img/editar.png'
    // editarImg.classList.add()
    // const editarBtn = document.createElement('button')
    // editarBtn.id = id
    // editarBtn.onclick = editarComunicado




 

    return card;
}

// Função para editar comunicado
function editarComunicado(){
    localStorage.setItem('idComunicado', this.id)
    window.location.href= "/html"
}

// Função para excluir comunicado
async function deletarComunicado(){
    const idComunicadoDelete = this.id
    await deletarComunicado(idComunicadoDelete)
    window.location.reload()
}




// Seleciona o contêiner dos cards
const container = document.getElementById('cards-container');

// Adiciona os cards ao contêiner
comunicados.forEach(comunicado => {
    const card = createCard(comunicado);
    container.appendChild(card);
});