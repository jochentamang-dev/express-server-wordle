import express, { Application, Request, Response } from "express"
import cors from "cors"

const app: Application = express()
const PORT = process.env.PORT ?? 8000;

app.use(cors())
// getting endpoint
app.get("/", (req: Request, res: Response) => {
    res.send({ secret: get_word() })
})

function get_word() {
    const secretWords = ["HELLO", "LOVER", "APPLE", "QUIET", "HANDS", "FEETS", "TABLE", "CHAIR", "BLURT", "SHOUT", "REACT", "MAJOR", "DEATH", "CRUST", "OUTDO", "ADOBE"]
    return secretWords[Math.floor(Math.random() * (secretWords.length))];
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})