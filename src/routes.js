// importando router para roteamento das rotas
import { Router } from 'express';

// invocando o router
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Configuração Ok!' });
});

export default routes;
