const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const fechaHoraServidor = new Date().toLocaleString();
  const respuesta = {
    estado: 'activo',
    fechahora: fechaHoraServidor,
  };
  res.json(respuesta);
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
