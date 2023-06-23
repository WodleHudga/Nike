const db = require('./db');

const getOrder = async (ref) =>{
    return await db.orders.findOne({ref});

};

const createOrder = async (order) => {
    const results = await db.orders.insertOne(order);
    return { ...order, _id: results.insertedId};

};


module.exports = {
    getOrder,
    createOrder,

};
