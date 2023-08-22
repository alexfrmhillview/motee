import path from "path";  // import path
import express from "express";  // import express
import dotenv from "dotenv";  // import dotenv
import cookieParser from "cookie-parser";  // import cookieParser
dotenv.config();  // initialize dotenv
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";  
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const port = process.env.PORT || 5000;  // set port

connectDB();  // connect to MongoDB

const app = express();  // create express app

//Body parser middleware

app.use(express.json());  // parse json
app.use(express.urlencoded({ extended: true }));  // parse urlencoded 


// Cookie parser middleware

app.use(cookieParser());  // use cookieParser


app.use("/api/products", productRoutes);  // use productRoutes
app.use("/api/users", userRoutes);  // use userRoutes
app.use("/api/orders", orderRoutes);  // use orderRoutes
app.use("/api/upload", uploadRoutes);  // use uploadRoutes

app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID})) // create route

const __dirname = path.resolve();  // set __dirname
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))  // use static folder

if (process.env.NODE_ENV === 'production') {
     const __dirname = path.resolve();
     app.use('/uploads', express.static('/var/data/uploads'));
     app.use(express.static(path.join(__dirname, '/frontend/build')));
   
     app.get('*', (req, res) =>
       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
     );
   } else {
     const __dirname = path.resolve();
   app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
     app.get('/', (req, res) => {
       res.send('API is running....');
     });
   }   

app.use(notFound);  // use notFound
app.use(errorHandler);  // use errorHandler 

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));
