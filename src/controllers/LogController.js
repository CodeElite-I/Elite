import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async log(req, res) {
    const { email = '', senha = '' } = req.body;
    if (!email || !senha) {
      return res.status(401).json({
        errors: ['Por favor, preencha os campos corretamente!'],
      });
    }

    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    if ((!await usuario.senhaIsValid(senha))) {
      return res.status(401).json({
        errors: ['Senha incorreta!'],
      });
    }

    const { id } = usuario;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
