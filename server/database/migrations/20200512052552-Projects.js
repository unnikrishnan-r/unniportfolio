"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.STRING
      },
      projectUrl: {
        type: Sequelize.STRING
      },
      projectRepo: {
        type: Sequelize.STRING
      },
      projectImageUrl: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.STRING
       }
       ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};