// const mysql = require('mysql2');
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_complete',
//     password: 'root@123'
// });
//
// module.exports = pool.promise();

const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','root@123',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;
