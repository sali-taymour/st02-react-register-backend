import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {getUsers} from './models.js'

const app = express();

const PORT = process.env.PORT || 3049;
const users = getUsers()



app.get("/", (req: express.Request, res: express.Response) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`listening to API on http://localhost:${PORT}`);
});
