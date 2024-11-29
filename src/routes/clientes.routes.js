import {Router} from 'express'
import {getClientes,
    getclientesxid,
    deleteCliente} from '../controladores/clientesCtrl.js'
const router=Router()
// armar nuestras rutas

router.get('/cliente',getClientes) //select
router.get('/cliente/:id',getclientesxid)//select x id
router.delete('/cliente/:id',deleteCliente)//delete

export default router