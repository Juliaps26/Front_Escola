// Pegar os alunos
export async function getProfessores(){
    let url='http://localhost:8080/v1/escolaIdeal/professores'
    const response=await fetch(url)
    const data=await response.json()
    return data.professores
}


// Pegar o aluno pelo ID
export async function getProfessorById(id){
    let url=`http://localhost:8080'/v1/escolaIdeal/professor/${id}`
    const response=await fetch(url)
    const professor =await response.json()
    return data.professor[0]
}

export async function putProfessor(professor, id){
    const url= `http://localhost:8080/v1/escolaIdeal/updateProfessor/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    }
    const response = await fetch(url,options)
    return response.ok
}

export async function postProfessor(professor){
    const url = 'http://localhost:8080/v1/escolaIdeal/professor'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(professor)
    }
    const response =  await fetch(url, options)
    return response.ok
}
 
// Excluir um filme
export async function deleteProfessor(id){
    const url=`http://localhost:8080/v1/escolaIdeal/deleteProfessor/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}

// // Excluir um aluno
// export async function deleteFilme(id){

// const url = ``
// const options = {
//     method: 'DELETE'
// }
// const response = await fetch(url, options)
// return response.ok
// }

// Pegar a turma do aluno
// export async function getTurmas(){
//     let url= ''
//     const response = await fetch(url)
//     const data = await response.json()
//     return data.turmas
// }// Pegar os alunos
export async function getProfessores(){
    let url='http://localhost:8080/v1/escolaIdeal/professores'
    const response=await fetch(url)
    const data=await response.json()
    return data.professores
}


// Pegar o aluno pelo ID
export async function getProfessorById(id){
    let url=`http://localhost:8080'/v1/escolaIdeal/professor/${id}`
    const response=await fetch(url)
    const professor =await response.json()
    return data.professor[0]
}

export async function putProfessor(professor, id){
    const url= `http://localhost:8080/v1/escolaIdeal/updateProfessor/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    }
    const response = await fetch(url,options)
    return response.ok
}

export async function postProfessor(professor){
    const url = 'http://localhost:8080/v1/escolaIdeal/professor'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(professor)
    }
    const response =  await fetch(url, options)
    return response.ok
}
 
// Excluir um filme
export async function deleteProfessor(id){
    const url=`http://localhost:8080/v1/escolaIdeal/deleteProfessor/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}

// // Excluir um aluno
// export async function deleteFilme(id){

// const url = ``
// const options = {
//     method: 'DELETE'
// }
// const response = await fetch(url, options)
// return response.ok
// }

// Pegar a turma do aluno
// export async function getTurmas(){
//     let url= ''
//     const response = await fetch(url)
//     const data = await response.json()
//     return data.turmas
// }