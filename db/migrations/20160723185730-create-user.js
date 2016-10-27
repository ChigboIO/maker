/* eslint-disable object-shorthand, func-names, no-unused-vars*/
'use strict';

const updateSchema = require('../update_schema');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      // paranoid: true,
      underscored: true
    }).then(updateSchema);
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users').then(updateSchema);
  }
};
