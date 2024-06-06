import express from 'express';
import dotenv from 'dotenv';
import joyasRouter from './routes/joyasRoutes.js';


dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Registrar las rutas de joyas con el prefijo /api
app.use('/api', joyasRouter);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Oh wow! this is working =)');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
