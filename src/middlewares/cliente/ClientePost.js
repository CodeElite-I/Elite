import Joi from 'joi';
import { loadMessages } from 'joi-translation-pt-br';

export default async (req, res, next) => {
  try {
    const clientePost = Joi.object({
      nome: Joi.string().min(4).required(),
      cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
      cep: Joi.string().regex(/^\d{5}-\d{3}$/).required(),
      rua: Joi.string().min(4).required(),
      numero: Joi.number().min(1).required(),
      bairro: Joi.string().min(4).required(),
      cidade: Joi.string().min(4).required(),
      estado: Joi.string().min(1).max(2).required(),
      email: Joi.string().email().required(),
      telefone: Joi.string().trim().required(),
    });
    const { error } = await clientePost.validate(req.body, { abortEarly: true, loadMessages });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(error.status || 400).json({
      errors: [error.description || error.message],
    });
  }
};
