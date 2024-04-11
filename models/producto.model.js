import pgService from "../service/pg.service.js";

export const getProductoModel = async () => {
    const pg = new pgService();
    return await pg.connection.query(
        'SELECT * FROM PRODUCTO'
    )
}

export async function getProductoUnicoModel(id) {
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            'SELECT * FROM PRODUCTO WHERE ID_PRODUCTO = $1',
            [id]
        )
    } catch (error) {
        return 'Este ID no es válido';
    }

}

export const postProductoModel = async (nombre, detalle, valor) => {
    const pg = new pgService();
    return await pg.connection.query(
        `INSERT INTO PRODUCTO (NOMBRE, DETALLE, VALOR) 
            VALUES 
            ($1, $2, $3) RETURNING*`,
        [nombre, detalle, valor]
    )
}

export const updateProductoModel = async(id, nombre, detalle, valor)=>{
    try {
        const pg=new pgService();
    return await pg.connection.query(
        `UPDATE PRODUCTO 
        SET NOMBRE= $2,
            DETALLE=$3,
            VALOR=$4
            WHERE ID_PRODUCTO=$1 
        RETURNING * `,
        [id, nombre, detalle, valor ]
    )
    } catch (error) {
        return 'Este ID no es válido';
    }
}