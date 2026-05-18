import express from "express";
import emailRoutes from './route/email.route.js'
import dotenv from 'dotenv';
import cors from 'cors'

const app = express();

dotenv.config();

const corsOptions = {
    origin: 'https://nexora2.onrender.com',
    credentials: true,
};

app.use(cors(corsOptions))

app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended:true}));

app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});