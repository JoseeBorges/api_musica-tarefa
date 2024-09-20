import { inserirTarefa } from "../../repository/tarefasRepository.js";

export default async function inserirTarefaService(tarefaObj){

    let id = await inserirTarefa(tarefaObj)

    return id;

}