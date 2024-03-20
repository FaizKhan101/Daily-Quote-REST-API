const express = require("express")

const quotesController = require("../controllers/qoutes.controller")

const router = express.Router()

router.get("/", quotesController.getQuote)

module.exports = router