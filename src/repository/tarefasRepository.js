import con from './connection.js'

export async function inserirTarefa(tarefa){
    
    const comando = `
    insert into tb_tarefa ( ds_tarefa ,nr_ordem ,bt_finalizado,dt_cadastro)
    values (?,?,?,?);
    `

    let resposta = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finaliado, tarefa.dataCadastro]);
    let info = resposta[0];
    let id = info.insertId;
    return id
}


export async function consultarTarefa(){
    
    const comando = `
    select
    id_tarefa       id,
    ds_tarefa       tarefa,
    nr_ordem        ordem,
    bt_finalizado   finalizado,
    dt_cadastro     dataCadastro      
    from  tb_tarefa
    `

    let resposta = await con.query(comando)
    let registros = resposta[0]
    return registros;

}


export async function alterarTarefa(id, tarefa){

    const comando = `
    update tb_tarefa
    set ds_tarefa = ?,
        nr_ordem = ?,
        bt_finalizado = ?,
        dt_cadastro = ?      
    where id_tarefa = ?
    `

    let resposta = con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finaliado, tarefa.dataCadastro, id] )

    let info = resposta[0];
    let linhasAfetadas = info //affectedRows; mostra linhas afetadas ERROR
    return linhasAfetadas;

}


export async function deletarTarefa(id){
    
    const comando = `
    DELETE FROM tb_musica 
    WHERE id_tarefa = ? ;
    `

    let resposta = await con.query(comando, [id])
    let info = resposta[0]
    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}