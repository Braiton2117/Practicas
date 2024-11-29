import { conmysql } from '../db.js'

export const getmedidor =
async (req, res) => {
    try {
        const [result] = await conmysql.query('select * from tb_medidor')
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar Consumo" })
    }
}

//función que retorna un cliente c id
export const getmedidorxid =
    async (req, res) => {
        try {
            // console.log(req.params.id)
            const [result] = await conmysql.query('select * from tb_medidor where med_id=?', [req.params.id])
            if (result.length <= 0) return res.status(404).json({
                id: 0,
                messge: "consumo no encontrado"
            })
            res.json(result[0])
        } catch (error) {
            return res.status(500).json({ message: 'somenting goes wrong' })
        }

    }
//función que crea un nuevo cliente
export const postmedidor = async (req, res) => {
    try {
        const {cli_cedula, med_num_medidor, med_longitud, med_latitud, med_estado } = req.body

        const [rows] = await conmysql.query('INSERT INTO tb_medidor ( cli_cedula, med_num_medidor, med_longitud, med_latitud, med_estado ) VALUES(?,?,?,?,?)',
            [ cli_cedula, med_num_medidor, med_longitud, med_latitud, med_estado ])
        ///console.log(req.body)
        // res.send("insertar")
        res.send({
            id: rows.insertId,
            messge: 'medidor registrado con éxito :)'
        })
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

export const putmedidor = async (req, res) => {
    try {
        // res.send('modificado cliente')
        const { id } = req.params
        const { cli_cedula, med_num_medidor, med_longitud, med_latitud, med_estado  } = req.body
        const [result] = await conmysql.query(
            'UPDATE tb_medidor SET cli_cedula=?, med_num_medidor=?, med_longitud=?, med_latitud=?, med_estado=? where med_id=?',
            [cli_cedula, med_num_medidor, med_longitud, med_latitud, med_estado  , id]
        )
        if (result.affectedRows <= 0) return res.status(404).json({
            messge: 'medidor no encontrado'
        })
        const [rows] = await conmysql.query('select * from tb_medidor where med_id=?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'somenting goes wrong' })
    }


}

//funcion que elimina un cliente x id
export const deletemedidor = async (req, res) => {
    try {
        const [result] = await conmysql.query('delete from tb_medidor where med_id=?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            id: 0,
            messge: "No pudo eliminar el medidor"
        })

        res.json({
            id: 1,
            messge: 'medidor Eliminado con éxito :)'
        })
    } catch (error) {
        return res.status(500).json({ message: 'somenting goes wrong' })
    }

}