const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/', (req, res) => {
  res.send('🔥 GOLD BEAST IS RUNNING 🔥');
});
let balance = 1000;
let price = 2650;
let inTrade = false;
let entryPrice = 0;
function getGoldPrice() {
  price += (Math.random() - 0.48) * 2;
  return price.toFixed(2);
}
function beastStrategy() {
  const currentPrice = getGoldPrice();
  console.log(`Price: $${currentPrice}`);
  if (!inTrade && Math.random() > 0.7) {
    inTrade = true;
    entryPrice = currentPrice;
  } else if (inTrade && Math.random() > 0.7) {
    inTrade = false;
  }
}
setInterval(beastStrategy, 5000);
app.listen(PORT, () => console.log(`RUNNING ON ${PORT}`));
