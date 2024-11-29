import {Router} from 'express'
import multer from 'multer';
import {getmedidor,getmedidorxid,postmedidor,putmedidor,deletemedidor} from '../controladores/medidor.Ctrl.js'

//configurar multer para almacenar las imagenes
const storage=multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,'uploads');//carpeta donde se guardan las imagenes
},
filename:(req,file,cb)=>{
    cb(null, `${Date.now()}-${file.originalname}`);
}
});

const upload=multer({storage});
const router=Router()
//rutas
router.get('/medidor',getmedidor)
router.get('/medidor/:id',getmedidorxid)
router.post('/medidor',postmedidor)
router.put('/medidor/:id',putmedidor)
router.delete('/medidor/:id',deletemedidor)

//exportamos las rutas
export default router