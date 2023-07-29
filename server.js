const app = require('./src/app'); // Importa o app.js

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Seu servidor está na porta: ${PORT}`);
});