'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      projectName: 'test project',
      projectUrl: 'www.google.com',
      projectRepo: 'www.google.com',
      projectImageUrl: 'www.google.com',
      projectDescription: "test project",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
