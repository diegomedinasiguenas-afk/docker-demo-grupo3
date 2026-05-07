const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: '¡Hola desde Docker! 🐳',
        grupo: 'Grupo 3 - Fullstack Developer',
        fecha: new Date().toLocaleString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', servicio: 'activo' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 Servidor corriendo en puerto ' + PORT);
});
