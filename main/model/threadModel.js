const Sequelize = require('sequelize');
const connection = require('./DAO');

const thread = connection.define('thread',{
    title:{
        type: Sequelize.STRING,
        allownull: false
    },
    content:{
        type: Sequelize.TEXT,
        allownull: false
    }
},{});

thread.sync({force:false}).then(()=>{});