import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
import productsRouter from "./routes/products.route";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", productsRouter);

init(app);
