import {Router} from 'express'
import multer from 'multer';
import {getProductos,getProductosxid,postProductos,putProductos,patchProducto,deleteProductos} from '../controladores/productosCtrl.js'

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
router.get('/consumo',getProductos)
router.get('/consumo/:id',getProductosxid)
router.post('/consumo',postProductos)
router.put('/consumo/:id',putProductos)
router.patch('/consumo/:id',patchProducto)
router.delete('/consumo/:id',deleteProductos)

//exportamos las rutas
export default router