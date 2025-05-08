const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const PORT = 3000;

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
