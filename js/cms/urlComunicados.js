export async function getComunicados(){
    let url='http://localhost:8080/v1/escola_ideal/comunicados'
    const response=await fetch(url)
    const data=await response.json()
    return data.comunicado
}

export async function getComunicadosById(id){
    let url=`http://localhost:8080'/v1/escolaideal/aluno/${id}`
    const response=await fetch(url)
    const comunicado =await response.json()
    return data.comunicados[0]
}


// Novo comunicado
export async function postComunicado(comunicado){
    const url = 'http://localhost:8080/v1/escola_ideal/comunicado'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
      
        body: JSON.stringify(comunicado)
    }
    const response =  await fetch(url, options)
    return response.ok
}