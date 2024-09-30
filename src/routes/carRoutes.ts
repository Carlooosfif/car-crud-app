import { Router } from 'express';
import { getCars, addCar, editCar, deleteCar } from '../controllers/carController';

const router = Router();

// Ruta para obtener todos los carros
router.get('/', getCars);

// Ruta para agregar un carro
router.post('/', addCar);

// Ruta para editar un carro
router.put('/:id', editCar);

// Ruta para eliminar un carro
router.delete('/:id', deleteCar);

export default router;
