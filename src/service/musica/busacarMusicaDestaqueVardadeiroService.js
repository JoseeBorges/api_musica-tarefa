import { busacarMusicaDestaqueVardadeiro } from "../../repository/musicaRepository.js";

export default async function busacarMusicaDestaqueVardadeiroService(destaque){

    let registro = busacarMusicaDestaqueVardadeiro(destaque)

    return registro;
    
}