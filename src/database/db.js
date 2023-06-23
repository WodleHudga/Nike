const { MongoClient} = require('mongodb');

const uri = 'mongodb+srv://saieshkamble:w0NTkH3XWlBlTFjr@cluster0.arexinh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');

module.exports = {
    products
}