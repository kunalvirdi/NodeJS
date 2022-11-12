const getDb = require('../util/database').getDb;
const mongodb=require('mongodb')
class Product {
  constructor(title, price, description, imageUrl,id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id=id&&new mongodb.ObjectId(id)
  }

  save() {
    const db = getDb();
    let dbOp;
    if(this._id){
      dbOp=db.collection('products').updateOne({_id:this._id},{$set:this})
    }else{
      dbOp=db
          .collection('products')
          .insertOne(this);
    }
    return dbOp
  }

  static fetchAll(){
    const db=getDb();
    return db.collection('products').find().toArray();
  }

  static findOne(prodId){
    const db=getDb();
    return db.collection('products').findOne({_id:mongodb.ObjectId(prodId)})
  }
  static del(prodId){
    const db=getDb();

    return db.collection('products').deleteOne({_id:mongodb.ObjectId(prodId)})
  }
}

module.exports = Product;
