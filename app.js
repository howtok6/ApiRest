const express = require('express');
const app = express();
const userRoutes = require('./routes/user'); 
const PORT = process.env.PORT || 3000; // Si no existe, usa el puerto 3000 por defecto

// Middleware para las rutas
app.use('/api', userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
