'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('consumers', [
      {
        name: 'James Hatfield',
        email: 'james@metallica.com',
        sex: 'M',
        city: 'Los Angeles',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Bruce Wayne',
        email: 'bruce@wayne.com',
        sex: 'M',
        city: 'Gotham',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Trinity',
        email: 'trinity@matrix.com',
        sex: 'F',
        city: 'Nova York',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Linus Torvalds',
        email: 'linus@tux.com',
        sex: 'F',
        city: 'Colorado',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('consumers', null, {});
  }
};
