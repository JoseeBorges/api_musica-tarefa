import { Router } from 'express';
const endpoints = Router();

import inserirTarefaService from '../service/tarefas/inserirTarefaService.js';
import consultarTarefaService from '../service/tarefas/consultarTarefaService.js';
import deletarTarefaService from '../service/tarefas/deletarTarefaService.js';
import alterarTarefaService from '../service/tarefas/alterarTarefaService.js';


endpoints.post('/tarefa', async (req, resp) => {

    try {
        let tarefa = req.body;
        let id = await inserirTarefaService(tarefa)
        
        resp.send({
            idTarefa: id 
        })
    } 
    catch(err) {
    // catch denúncia/filtra o erro
        
        resp.status(400).send({
            erro: err.message
        }) 
    }
})

endpoints.get('/tarefa', async (req, resp) => {

    try {
        let registros = await consultarTarefaService()
        resp.send(registros)
    } 
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/tarefa/:id', async (req, resp) => {

    try{
        let id = req.params.id
        let tarefaObj = req.body

        await alterarTarefaService(id, tarefaObj)
        resp.status(204).send()

    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

})


endpoints.delete('/tarefa/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        await deletarTarefaService(id)

        resp.send();
    } 
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;