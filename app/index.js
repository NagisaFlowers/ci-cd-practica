const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola desde CI/CD!');
// Error intencional - falta llave de cierre
app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`);
});