'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up : async function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',  [
      {
          "id": 3000,
          "name": "U1",
          "age": "21",
          "password": await bcrypt.hash("luckyshine001",10),
          "email": "u1@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": 3001,
          "name": "U2",
          "age": "51",
          "password": await bcrypt.hash("luckyshine002",10),
          "email": "u2@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": 3002,
          "name": "U3",
          "age": "31",
          "password": await bcrypt.hash("luckyshine003",10),
          "email": "u3@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": 3003,
          "name": "U4",
          "age": "18",
          "password": await bcrypt.hash("luckyshine004",10),
          "email": "u4@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": 3004,
          "name": "U5",
          "age": "21",
          "password": await bcrypt.hash("luckyshine005",10),
          "email": "u5@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      },
      {
          "id": 3005,
          "name": "U6",
          "age": "35",
          "password": await bcrypt.hash("luckyshine006",10),
          "email": "u6@luckyshine.xyz",
          "createdAt" : new Date(),
          "updatedAt" : new Date()
      }
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
    }])
  }
};