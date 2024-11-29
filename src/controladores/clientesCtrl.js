import { conmysql } from '../db.js'

export const getClientes =
    async (req, res) => {
        try {
            const [result] = await conmysql.query('select * from tb_cliente')
            res.json(result)
        } catch (error) {
            return res.status(500).json({ message: "Error al consultar clienetes" })
        }
    }


export const getclientesxid=
async (req, res)=>{
    try {
        const [result]=await conmysql.query(
            'select * from tb_cliente where cli_cedula=?',[req.params.id])
        if(result.length<=0)return res.status(404).json({
            cli_cedula:0,
            message:"Cliente no encontrado"
        })
        res.json(result[0])
    } catch (error) {
        return res.status(500).json(
            {message:'error del lado del servidor'})
    }
}

export const deleteCliente=
async(req, res)=>{
    try {
      
        const [rows]=
        await conmysql.query(' delete from tb_cliente where cli_cedula=?',[req.params.id])
        if(rows.affectedRows<=0)return res.status(404).json({
            id:0,
            message:"NO pudo eliminar al cliente"
        })
        res.sendStatus(202)
    } catch (error) {
        return res.status(500).json({message:"Error del lado del servidor"})
    }
}