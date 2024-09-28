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
