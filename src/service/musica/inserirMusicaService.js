import { inserirMusica } from "../../repository/musicaRepository.js";

export default async function inserirMusicaService(musicaObj){

    let id = await inserirMusica(musicaObj)

    return id;

}