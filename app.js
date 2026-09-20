const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🔥 GOLD BEAST IS RUNNING 🔥 - Bot is alive!');
});

// --- GOLD BEAST LOGIC ---
let balance = 1000;
let price = 2650;
let inTrade = false;
let entryPrice = 0;

function getGoldPrice() {
  // محاكاة سعر الذهب - بعدين نربطه بسعر حقيقي
  price += (Math.random() - 0.48) * 2;
  return price.toFixed(2);
}

function beastStrategy() {
  const currentPrice = getGoldPrice();
  console.log(`[GOLD] Price: $${currentPrice} | Balance: $${balance.toFixed(2)} | InTrade: ${inTrade}`);

  if (!inTrade && Math.random() > 0.7) {
    inTrade = true;
    entryPrice = currentPrice;
    console.log(`🚀 BUY SIGNAL at $${entryPrice}`);
  } else if (inTrade) {
