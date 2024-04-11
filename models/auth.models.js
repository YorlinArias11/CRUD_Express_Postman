import pgService from "../service/pg.service.js";

export const getUsuario = async (username, password)=> {
    const pg = new pgService();
    return await pg.connection.oneOrNone(`SELECT USERNAME FROM USUARIO 
        WHERE USERNAME = $1 AND PASSWORD = $2`, [username, password])
}