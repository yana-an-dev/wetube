require ("@babel/register");
import express from "express";
import morgan from "morgan";
import helmet  from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./Router";
const app = express();

const handleHome = (req, res) => res.send("hello from home 2");

const handleProfile = (req, res) => res.send("You are my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;


