import { getProductoModel, getProductoUnicoModel, postProductoModel, updateProductoModel, deleteProductoModel} from "../models/producto.model.js"


export const getProducto = async (req, res) => {
    let data = await getProductoModel();

    res.status(200).json({msg : 'Esto es GET', data: data});
}

export const getProductoUnico = async (req, res) => {
    let {id}  = req.params;
    let data = await getProductoUnicoModel(id);

    res.status(200).json({msg : 'Esto es GET ÚNICO', data: data});
}

export const postProducto = async (req, res) => {
    let {detalle, nombre, valor} = req.body;

    let data = await postProductoModel(nombre, detalle, valor);
    res.status(200).json({msg : 'Esto es POST', data: data})
}

export const updateProducto = async (req, res) => {
    let {detalle, nombre, valor}=req.body;
    let {id}=req.params;
    let data=await updateProductoModel(id, nombre, detalle, valor);

    res.status(200).json({msg : 'Esto es un UPDATE', data: data})
}

export const deleteProducto =  async (req, res) => {
    let id = req.params.id;
    let data = await deleteProductoModel(id); 
    res.json({success: true, data: data ,   msg : 'Esto es un DELETE'})
}

export default {
    getProducto,
    getProductoUnico,
    postProducto,
    updateProducto,
    deleteProducto
}