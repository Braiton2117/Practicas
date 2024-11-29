import {Router} from 'express'
import	{getUsuarios,getUsarioxid,deleteUsuarios} from '../controladores/usuarios.Ctrl.js'

const router=Router()

router.get('/trabajador',getUsuarios) //select
router.get('/trabajador/:id',getUsarioxid) //select
router.delete('/trabajador/:id',deleteUsuarios)
export default router