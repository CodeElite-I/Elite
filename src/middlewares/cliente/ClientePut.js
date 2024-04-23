import Joi from 'joi';
import { loadMessages } from 'joi-translation-pt-br';

export default async (req, res, next) => {
  try {
    const clientePut = Joi.object({
      nome: Joi.string().min(4),
      cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      cep: Joi.string().regex(/^\d{5}-\d{3}$/),
      rua: Joi.string().min(4),
      numero: Joi.number().min(1),
      bairro: Joi.string().min(4),
      cidade: Joi.string().min(4),
      estado: Joi.string().min(1).max(2),
      email: Joi.string().email(),
      telefone: Joi.string().trim(),
    });
    const { error } = await clientePut.validate(req.body, { abortEarly: true, loadMessages });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(error.status || 400).json({
      errors: [error.description || error.message],
    });
  }
};
