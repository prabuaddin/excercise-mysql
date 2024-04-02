import express, { Express, NextFunction, Request, Response } from "express";
import router from "./routers";

const app: Express = express()
const port = 3000
app.use(router)

// CENTRALIZED ERROR
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
    .status(err.status || 500)
    .send({
        error: true,
        message: err.message || 'Error',
        data: {}
    })
})

app.listen(port, () => {
    console.log(`🔥[Server] : server is running at http://localhost:${port}`)
})