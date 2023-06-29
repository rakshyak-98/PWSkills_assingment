import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class Counter{
    state = 0;
    getCounter(){
        return this.state
    }
    increment(){
        this.state++
    }
    decrement(){
        this.state--
    }
}

const counter = new Counter()

app.get("/", (req, res) => {
    res.status(200).json({counter: counter.state})
})

app.get('/increment', (req, res) => {
    counter.increment()
    res.status(200).json({counter: counter.state})
})

app.get("/decrement", (req, res) => {
    counter.decrement()
    res.status(200).json({counter: counter.state})
})

app.listen(3002, () => console.log("listning of port 3002"))