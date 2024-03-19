module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('servicos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc_servico: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    observacao: {
      type: Sequelize.STRING,
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

  down: (queryInterface) => queryInterface.dropTable('servicos'),
};
