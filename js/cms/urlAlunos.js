export async function getAlunos(){
    let url='http://localhost:8080/v1/escolaideal/alunos'
    const response=await fetch(url)
    const data=await response.json()
    return data.alunos
}

export async function getAlunoById(id){
    let url=`http://localhost:8080'/v1/escolaideal/aluno/${id}`
    const response=await fetch(url)
    const aluno =await response.json()
    return data.alunos[0]
}