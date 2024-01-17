import express, {Request, Response} from "express";
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req: Request, res: Response) => {
   return res.status(200).json({msg: 'Hello home route '})
})
app.listen(PORT, () => {
    console.log(`You server is running on port number: ${PORT}`)
})