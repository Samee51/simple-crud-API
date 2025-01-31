import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js'
import 'dotenv/config'


const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));







mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@backeneddb.a14ja.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackenedDB`).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    
    console.log("Connection failed to database", err);
});


// ROUTES

app.use("/api/products" , productRoute);



app.listen(port, () => {

    console.log(`Server is runing on port ${port}`);
});
