const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDb=require('./config/config')
const itemModel=require('./models/itemModel');
const items=require('./utils/data');

// config
dotenv.config();
connectDb();

// seederfunction

const importData=async()=>{
    try {
        
        await itemModel.deleteMany();
        const itemsData=await itemModel.insertMany(items);
        console.log('All items added')
        process.exit();


    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
};

importData();










