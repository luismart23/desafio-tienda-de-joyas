import express from 'express';
import * as joyasController from '../controllers/joyasController.js';

const router = express.Router();

router.get('/v1/joyas', joyasController.getJoyas);
router.get('/v1/joyas/categoria/:categoria', joyasController.getJoyasByCategory);
router.get('/v1/joyas/filtrar/:campo', joyasController.filtrarJoyas);
router.get('/v1/joyas/:id', joyasController.getJoyaById);
router.get('/v1/joyas', joyasController.paginarJoyas);
router.get('/v1/joyas', joyasController.ordenarJoyas);

export default router;

// Rutas url para verificar que todo funcione

// 1. Obtener todas las joyas: http://localhost:3000/api/v1/joyas

// 2. Obtener joyas por categoría: http://localhost:3000/api/v1/joyas/categoria/collar

// 3. Filtrar joyas por campo: http://localhost:3000/api/v1/joyas/filtrar/cadena

// 4. Obtener una joya por ID: http://localhost:3000/api/v1/joyas/1

// 5. Paginación de joyas: http://localhost:3000/api/v1/joyas?page=1&limit=5

// 6. Ordenar joyas: http://localhost:3000/api/v1/joyas?orden=asc -- http://localhost:3000/api/v1/joyas?orden=desc

