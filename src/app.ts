import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { connectDB } from './services/db';
import carRoutes from './routes/carRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

// Conectar a la base de datos
connectDB();

// Configurar middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);

// Ruta para el login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
