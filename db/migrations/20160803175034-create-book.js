/* eslint-disable object-shorthand, func-names, no-unused-vars*/
'use strict';

const updateSchema = require('../update_schema');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      no_of_pages: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(updateSchema);
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('books').then(updateSchema);
  }
};
