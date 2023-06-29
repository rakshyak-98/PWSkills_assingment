import express from 'express'
import {productsForMen, productsForWomen} from './data.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",  (req, res) => {
    res.status(200).send("Welcome to Men & Women Dummy Data")
})

app.get("/men", (req, res) => {
    res.status(200).json(productsForMen)
})

app.get("/women", (req, res) => {
    res.status(200).json(productsForWomen)
})

app.get("/other", (req, res) => {
    res.status(404).send("<h1>Page not found! </h1>")
})

app.listen(3001, () => console.log("express server listening on port 3001"))