'use strict'

// Arquivo para exibir o perfil do aluno 



// Criando elemento para a foto do aluno
const imgFoto = document.createElement('img')
const fotoURL = '/img/foto-aluno.png';
imgFoto.setAttribute('src', fotoURL)

const fotoContainer = document.getElementById('fotoContainer');
fotoContainer.appendChild(imgFoto)

// Estilizando a foto
imgFoto.classList.add('h-fotoHeight', 'w-fotoWidth', 'flex', 'justify-center', 'align-center')
const containerinfo = document.createElement('div')
containerinfo.classList.add('flex', 'gap-16', 'items-center', 'justify-center', 'grow')



// Criando elemento para mostrar o nome do aluno
const container = document.getElementById('p');
container.textContent = 'Gustavo Campos';


// Criando elemento para mostrar o numero da matricula

const numero = document.getElementById('matricula');
numero.textContent = 'Número da Matricula : 1234567';


// Criando elemento para exibir a data de nascimento


const data = document.getElementById('data');
data.textContent = 'Data nascimento : 26/12/2006';


// Criando elemento para exibir os pais

const pais = document.getElementById('pais')
pais.textContent = 'Responsáveis: Marcos e Alexandra';



// Criando elemento para exibir o endereço
const casa = document.getElementById('endereco')
casa.textContent = 'Endereço: Rua dos abreus 262 - Vila Menck - 06390077'

// Criando elemento para exibir a turma 

const sala = document.getElementById('turma');
sala.textContent = 'Turma: DS2B'



containerinfo.replaceChildren(fotoContainer, div)


