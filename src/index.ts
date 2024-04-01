import express, { Express, Request, Response } from "express";

import db from "./connection";
import util from 'util'

const query: any = util.promisify(db.query).bind(db)

const app: Express = express()
app.use(express.json())
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hallo</h1>')
})

app.get('/passenger', async (req: Request, res: Response): Promise<void> => {
    try {
       const findPassangers = await query ('SELECT * FROM passenger')
       res.status(200).send({
        error: false,
        message: 'success',
        data: findPassangers
       })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`🔥[Server] : server is running at http://localhost:${port}`)
})