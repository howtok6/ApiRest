const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido a la API REST desplegada en Railway 🚀');
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
