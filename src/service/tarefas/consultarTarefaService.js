import { consultarTarefa } from "../../repository/tarefasRepository.js";

export default async function consultarTarefaService(){

    let registro = await consultarTarefa()

    return registro;

}