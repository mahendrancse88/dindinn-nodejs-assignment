'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('treasures', [
      {
          "id": "100",
          "latitude": "1.33125924",
          "longitude": "103.8980486",
          "name": "T1",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "101",
          "latitude": "1.32255754",
          "longitude": "103.8943086",
          "name": "T2",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "102",
          "latitude": "1.3166356",
          "longitude": "103.8891225",
          "name": "T3",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "103",
          "latitude": "1.31286055",
          "longitude": "103.8545565",
          "name": "T4",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "104",
          "latitude": "1.34439896",
          "longitude": "103.8765938",
          "name": "T5",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "105",
          "latitude": "1.33616189",
          "longitude": "103.8770866",
          "name": "T6",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "106",
          "latitude": "1.32552844",
          "longitude": "103.8691014",
          "name": "T7",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "107",
          "latitude": "1.32303589",
          "longitude": "103.8774815",
          "name": "T8",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "108",
          "latitude": "1.33465304",
          "longitude": "103.870449",
          "name": "T9",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "109",
          "latitude": "1.32606138",
          "longitude": "103.8793007",
          "name": "T10",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "110",
          "latitude": "1.25886946",
          "longitude": "103.898879",
          "name": "T11",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "111",
          "latitude": "1.26973345",
          "longitude": "103.8810448",
          "name": "T12",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "112",
          "latitude": "1.32914713",
          "longitude": "103.8334781",
          "name": "T13",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "113",
          "latitude": "1.32960595",
          "longitude": "103.8807937",
          "name": "T14",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "114",
          "latitude": "1.33700251",
          "longitude": "103.8492249",
          "name": "T15",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "115",
          "latitude": "1.27845714",
          "longitude": "103.8571762",
          "name": "T16",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "116",
          "latitude": "1.36019784",
          "longitude": "103.8563582",
          "name": "T17",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": "117",
          "latitude": "1.31551921",
          "longitude": "103.8632839",
          "name": "T18",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
