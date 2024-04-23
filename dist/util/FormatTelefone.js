"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function formatTelefone(telefone) {
  telefone = telefone.replace(/\D/g, '');

  if (telefone.length === 11) {
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length === 10) {
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length === 9) {
    telefone = telefone.replace(/(\d{5})(\d{4})/, '$1-$2');
  } else if (telefone.length === 8) {
    telefone = telefone.replace(/(\d{4})(\d{4})/, '$1-$2');
  }

  return telefone;
} exports.default = formatTelefone;
