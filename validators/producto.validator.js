import { checkSchema } from "express-validator";

export const postProductoValidator = checkSchema(
    {
        nombre: {
            errorMessage: 'Nombre no valido',
            notEmpty: true,
            isLength: {
                errorMessage: 'El tamaño debe ser mínimo 1 y máximo 10',
                options: { min: 1, max: 10}
            }
        },
        valor: {
            matches: { options: /^[0-9]+$/},
            errorMessage: 'Valor no válido, solo valores numéricos'
        }
    },
    ["body"]
);