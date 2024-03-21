"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numero: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    senha_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    inativo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    excluido: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('usuarios'),
};
