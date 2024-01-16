const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 80; // Usa el puerto del entorno o el puerto 80 por defecto

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const fechaHoraServidor = new Date().toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  const respuesta = {
    estado: 'activo',
    fechahora: fechaHoraServidor,
  };
  res.json(respuesta);
});

// Ruta para el método POST
app.post('/', (req, res) => {
  const requestBody = req.body;
  const respuesta = {
    metodo: 'POST',
    body: requestBody,
  };
  res.json(respuesta);
});

// Ruta para el método PUT
app.put('/', (req, res) => {
  const requestBody = req.body;
  const respuesta = {
    metodo: 'PUT',
    body: requestBody,
  };
  res.json(respuesta);
});

// Ruta para el método DELETE
app.delete('/', (req, res) => {
  const requestBody = req.body;
  const respuesta = {
    metodo: 'DELETE',
    body: requestBody,
  };
  res.json(respuesta);
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
