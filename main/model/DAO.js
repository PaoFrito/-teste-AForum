const Sequelize = require('sequelize');
const connection = new Sequelize(
    /* DB neme: */ 'aforum_db',
    /* DB user: */ 'root',
    /* DB password: */ '',{
    /* Host: */ host: 'localhost',
    /* DB Type: */ dialect: 'mysql'
});

module.exports = connection;