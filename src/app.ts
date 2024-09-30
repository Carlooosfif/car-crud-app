import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { connectDB } from './services/db';
import carRoutes from './routes/carRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api/cars', carRoutes);  // Rutas de carros
app.use('/api/users', userRoutes);

// Ruta para el login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

//Ruta para el registro
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Ruta para la página de carros
app.get('/cars', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cars.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
