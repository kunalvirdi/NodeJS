const Sequelize=require('sequelize')

const sequelize=require('../util/database');

const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autocomplete:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  price:Sequelize.DOUBLE,
  description:Sequelize.STRING,
  imageUrl:Sequelize.STRING
})

