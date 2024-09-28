import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import { config } from '../services/db';

// Registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Conectar a la base de datos
    const pool = await sql.connect(config);
    await pool.request().query`INSERT INTO Users (username, password, email) VALUES (${username}, ${hashedPassword}, ${email})`;

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
  
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query`SELECT * FROM Users WHERE username = ${username}`;
      const user = result.recordset[0];
  
      if (!user) {
        res.status(400).json({ error: 'Usuario no encontrado' });
        return;
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(400).json({ error: 'Contraseña incorrecta' });
        return;
      }
  
      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  };
