import express from 'express';
import cookieParser from 'cookie-parser';

import cors from 'cors';


const app = express()
  
app.use(cookieParser())
app.use(cors({
    origin: 'https://65b7eea7be077f34cb945ba4--stirring-frangollo-a919c8.netlify.app',
    credentials: true
  }));
  
app.use(express.json())


//router import
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import wishtlistRouter from "./routes/wishList.routes.js"
import cartRouter from './routes/cart.routes.js';
//Router declaration

// app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/wishtlist", wishtlistRouter);
app.use("/api/v1/cart", cartRouter);



export {app}
