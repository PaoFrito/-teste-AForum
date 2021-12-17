const Sequelize = require('sequelize');
const connection = require('./DAO');
const thread = require('./threadModel');

const answer = connection.define('answer',{
    content:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    threadId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

answer.sync({force:false});

module.exports = answer;