/* eslint-disable object-shorthand, func-names, no-unused-vars*/
'use strict';

const updateSchema = require('../update_schema');

console.log('In the user migration file');
updateSchema();
module.exports = {
  up: function (queryInterface, Sequelize) {
    console.log('In the "up" function of the user migration');
    updateSchema();

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
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
