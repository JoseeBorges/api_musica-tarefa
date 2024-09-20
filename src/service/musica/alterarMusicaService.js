import { alterarMusica } from "../../repository/musicaRepository.js";

export default async function alterarMusicaService(id, musicaObj){

    let linhasAfetadas = await alterarMusica(id, musicaObj)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma música alterada')

    }

    return linhasAfetadas;
    
}