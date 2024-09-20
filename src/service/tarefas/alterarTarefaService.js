import { alterarTarefa } from "../../repository/tarefasRepository.js";

export default async function alterarTarefaService(id, tarefaObj){

    let linhasAfetadas = await alterarTarefa(id, tarefaObj)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma tarefa alterada')

    }

    return linhasAfetadas;
    
}