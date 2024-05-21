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




// Criando elemento para mostrar o nome do aluno
const nomeDoAluno = document.createElement('p');
nomeDoAluno.textContent = 'Gustavo Campos';
nomeDoAluno.classList.add()
const container = document.getElementById('p');
container.appendChild(nomeDoAluno);


// Criando elemento para mostrar o numero da matricula

const matricula = document.createElement('p')
matricula.textContent = 'Número da Matricula : 1234567';
matricula.classList.add()
const numero = document.getElementById('matricula');
numero.appendChild(matricula)

// Criando elemento para exibir a data de nascimento

const nascimento = document.createElement('p')
nascimento.textContent = 'Data nascimento : 26/12/2006';
nascimento.classList.add()
const data = document.getElementById('data');
data.appendChild(nascimento)


// Criando elemento para exibir os pais
const responsaveis = document.createElement('p')
responsaveis.textContent = 'Responsáveis: Marcos e Alexandra';
responsaveis.classList.add()
const pais = document.getElementById('pais')
pais.appendChild(responsaveis)


// Criando elemento para exibir o endereço
const endereco = document.createElement('p')
endereco.textContent = 'Endereço: Rua dos abreus 262 - Vila Menck - 06390077'
endereco.classList.add()
const casa = document.getElementById('endereco')
casa.appendChild(endereco)

// Criando elemento para exibir a turma 

const turma = document.createElement('p')
turma.textContent = 'Turma: DS2B'
turma.classList.add();
const sala = document.getElementById('turma');
sala.appendChild(turma);


div.appendChild(nomeDoAluno, data)
