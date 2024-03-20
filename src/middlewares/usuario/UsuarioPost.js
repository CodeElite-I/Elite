import Joi from 'joi';
import { messages } from 'joi-translation-pt-br';

export default async (req, res, next) => {
  try {
    const userPost = Joi.object({
      nome: Joi.string().min(4).required(),
      cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
      cep: Joi.string().regex(/^\d{5}-\d{3}$/).required(),
      rua: Joi.string().min(4).required(),
      numero: Joi.number().min(1).required(),
      bairro: Joi.string().min(4).required(),
      cidade: Joi.string().min(4).required(),
      estado: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(),
      telefone: Joi.string().regex(/^\(\d{2}\)\d{5}-\d{4}$/).required(),
    });
    const { error } = await userPost.validate(req.body, { abortEarly: true, messages });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(error.status || 400).json({
      errors: [error.description || error.message],
    });
  }
};
