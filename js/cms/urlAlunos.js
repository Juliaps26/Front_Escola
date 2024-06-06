export async function getAlunos(){
    let url='http://localhost:8080/v1/escolaideal/alunos'
    const response=await fetch(url)
    const data=await response.json()
    return data.alunos
}

//  Pegar pelo ID
export async function getAlunoById(id){
    let url=`http://localhost:8080/v1/escolaideal/aluno/${id}`
    const response=await fetch(url)
    const data =await response.json()
    return data.aluno[0]
}

// Novo aluno
export async function postAluno (aluno){
    const url = 'http://localhost:8080/v1/escolaideal/aluno/insert'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(aluno)
    }
    const response =  await fetch(url, options)
    return response.ok
}

// Excluir aluno
export async function deleteAluno(id){
    const url=`http://localhost:8080/v1/escolaideal/aluno/delete//${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}

// Editar aluno 
export async function putAluno(aluno, id){
    const url= `http://localhost:8080/v1/escolaideal/aluno/update/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    }
    const response=await fetch(url,options)
    return response.ok
}



// Pegar as turmas
export async function getTurmas(){
    let url='http://localhost:8080/v2/acmefilmes/todas/classificacoes'
    const response=await fetch(url)
    const data=await response.json()
    return data.turma
}


