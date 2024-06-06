import * as funciones from '../utils/funciones.js';
import joyas from '../data/joyas.js';

export const getJoyas = (req, res) => {
    res.send({ joyas: funciones.HATEOAS() });
};

export const getJoyasByCategory = (req, res) => {
    const { categoria } = req.params;
    const joyasFiltradas = funciones.filtroCategory(categoria);
    res.json({ joyas: joyasFiltradas });
};

export const filtrarJoyas = (req, res) => {
    const { campo } = req.params;
    const valorBuscado = campo.toLowerCase();

    const joyasFiltradas = funciones.filtrarJoyasPorCampo(valorBuscado);

    res.send({
        cantidad: joyasFiltradas.length,
        joyas: joyasFiltradas,
    });
};

export const getJoyaById = (req, res) => {
    const { id } = req.params;
    const joya = funciones.getJoyaById(parseInt(id));
    if (joya) {
        res.json({ joya });
    } else {
        res.status(404).json({
            error: "404 Not Found",
            message: "No existe una joya con ese ID"
        });
    }
};

export const paginarJoyas = (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const joyasPaginadas = funciones.paginarJoyas({ page: parseInt(page), limit: parseInt(limit) });
    res.json({ joyas: joyasPaginadas });
};

export const ordenarJoyas = (req, res) => {
    const { orden } = req.query;
    const joyasOrdenadas = funciones.ordenarJoyasPorValor(joyas, orden);
    res.json({ joyas: joyasOrdenadas });
};
