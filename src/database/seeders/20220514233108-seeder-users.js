'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Guilherme',
        lastName: 'Joventino',
        email: 'gulherme@majovdev.com',
        cep: 23059001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Renan',
        lastName: 'Lima',
        email: 'renan@majovdev.com',
        cep: 23059314,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Matheus',
        lastName: 'Aires',
        email: 'matheus@majovdev.com',
        cep: 23059540,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};