import app from './app';

const port = process.env.PORT_SERVER || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} `);
});
