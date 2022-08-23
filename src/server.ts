import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {user} from './models.js'

const app = express();

const PORT = process.env.PORT || 3049;
interface IUser {
    firstName: string;
    lastName: string;
    accessGroups: string[];
}




app.get("/", (req: express.Request, res: express.Response) => {
    res.send(user);
});

app.listen(PORT, () => {
    console.log(`listening to API on http://localhost:${PORT}`);
});
