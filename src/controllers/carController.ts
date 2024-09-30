import { Request, Response } from 'express';
import sql from 'mssql';
import { config } from '../services/db';

// Obtener todos los carros
export const getCars = async (req: Request, res: Response) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Cars');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los carros' });
  }
};

// Agregar un nuevo carro
export const addCar = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool.request().query`INSERT INTO Cars (name, price) VALUES (${name}, ${price})`;
    res.status(201).json({ message: 'Carro agregado exitosamente' });
  } catch (err) {
    console.error('Error al agregar el carro:', err);
    res.status(500).json({ error: 'Error al agregar el carro' });
  }
};

// Editar un carro
export const editCar = async (req: Request, res: Response) => {
  const { id, name, price } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool.request().query`UPDATE Cars SET name=${name}, price=${price} WHERE id=${id}`;
    res.status(200).json({ message: 'Carro actualizado exitosamente' });
  } catch (err) {
    console.error('Error al actualizar el carro:', err);
    res.status(500).json({ error: 'Error al actualizar el carro' });
  }
};

// Eliminar un carro
export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pool = await sql.connect(config);
    await pool.request().query`DELETE FROM Cars WHERE id=${id}`;
    res.status(200).json({ message: 'Carro eliminado exitosamente' });
  } catch (err) {
    console.error('Error al eliminar el carro:', err);
    res.status(500).json({ error: 'Error al eliminar el carro' });
  }
};