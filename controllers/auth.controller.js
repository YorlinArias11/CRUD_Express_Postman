import { getUsuario } from "../models/auth.models.js"
import { generateToken } from "../service/token.service.js";


export const login = async (req, res) => {
    try {
        let { username, password } = req.query;

        let data = await getUsuario(username, password);
        if (!data) {
            throw new Error("Los datos son incorrectos")
        }
        res.status(200).json({
            success: true,
            token: generateToken(data),
            msn: 'Ingresaste con exito'
        });
    } catch (error) {
        console.log(error.Error);
        res.status(401).json({
            success: false,
            token: '',
            msn: error.Error
        });
    }
}