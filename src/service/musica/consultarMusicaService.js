import { consultarMusica } from "../../repository/musicaRepository.js"; 

export default async function consultarMusicaService(){

    let registro = await consultarMusica()

    return registro;

}