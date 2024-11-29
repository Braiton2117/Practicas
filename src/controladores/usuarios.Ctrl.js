import { conmysql } from '../db.js'
export const getUsuarios =
    async (req, res) => {
        try {
            const [result] = await conmysql.query('select * from tb_trabajador')
            res.json(result)
        } catch (error) {
            return res.status(500).json({ message: 'somenting goes wrong' })
        }

    }
    
//función que retorna un usuarios c id
export const getUsarioxid =
    async (req, res) => {
        try {
            // console.log(req.params.id)
            const [result] = await conmysql.query('select * from tb_trabajador where tra_cedula=?', [req.params.id])
            if (result.length <= 0) return res.status(404).json({
                tra_cedula: 0,
                messge: "trabajador no encontrado"
            })
            res.json(result[0])
        } catch (error) {
            return res.status(500).json({ message: 'somenting goes wrong' })
        }

    }

//funcion que elimina un cliente x id
export const deleteUsuarios = async (req, res) => {
    try {
        const [result] = await conmysql.query('delete from tb_trabajador where tb_trabajador=?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            messge: "No pudo eliminar el trabajador"
        })
        res.json({
            id: 1,
            messge:'trabajador Eliminado con éxito :)'
        })
    } catch (error) {
        return res.status(500).json({ message: 'somenting goes wrong' })
    }

} 