import express from "express";
import dotenv from "dotenv";
import {getUsers} from './models.js'
import session from "express-session";
import cookieParser from "cookie-parser";
dotenv.config();


const app = express();

const PORT = process.env.PORT || 3049;
const users = getUsers()



app.get("/", (req: express.Request, res: express.Response) => {
    res.send(users);
});
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "tempsecret",
    })
);

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`listening to API on http://localhost:${PORT}`);
});
