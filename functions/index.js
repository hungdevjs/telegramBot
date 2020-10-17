const functions = require('firebase-functions')
// require('dotenv').config()

// let configs = require("./env.json")
// if (Object.keys(functions.configs()).length) {
//     configs = functions.configs()
// }

const configs = functions.config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(configs.telegram.bot_token)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors({ origin: true }))

app.get("/", (req, res) => {
    res.end("Get request")
})

app.post("/", (req, res) => {
    res.end("Post request")
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true })
//     response.send("Hello from Firebase!")
// })

exports.helloWorld = functions.https.onRequest(app)

exports.test = functions.https.onRequest(app)