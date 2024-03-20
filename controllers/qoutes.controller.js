const Quote = require("../models/quote.model");

exports.getQuote = async (req, res, next) => {
  let quote;
  try {
    quote = await Quote.getRandomQoute();
  } catch (error) {
    return next(error)
  }
  res.json({
    quote: quote,
  });
};
