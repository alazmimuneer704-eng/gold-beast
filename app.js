;const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
let price=2650.5,signal="WAITING",pnl=0;
setInterval(()=>{price+=(Math.random()-0.5)*2;let r=Math.random();if(r>0.7){signal="BUY";pnl+=1.5}else if(r<0.3){signal="SELL";pnl-=0.5}else{signal="WAITING"}},3000);
app.get('/api',(req,res)=>res.json({price:price.toFixed(2),signal,pnl:pnl.toFixed(2),time:new Date().toLocaleTimeString()}));
app.get('/',(req,res)=>res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width"><title>GOLD BEAST</title><style>body{background:#000;color:#ffd700;font-family:Arial;text-align:center;padding:20px} .box{border:2px solid #ffd700;border-radius:20px;padding:20px;margin-top:30px;box-shadow:0 0 30px #ffd700} .price{font-size:50px;font-weight:bold;margin:20px 0} .signal{font-size:40px;padding:15px;border-radius:10px;margin:20px} .BUY{background:#00ff00;color:#000} .SELL{background:#f00;color:#fff} .WAITING{background:#333;color:#ffd700}</style></head><body><h1>🔥 GOLD BEAST 🔥</h1><p>LIVE TRADING</p><div class="box"><div>GOLD PRICE</div><div class="price" id="price">$ 2650.50</div><div class="signal WAITING" id="signal">WAITING</div><div id="pnl">PNL: $0.00</div><div id="time"></div></div><script>setInterval(async()=>{let r=await fetch('/api');let d=await r.json();document.getElementById('price').innerText='$ '+d.price;let e=document.getElementById('signal');e.innerText=d.signal;e.className='signal '+d.signal;document.getElementById('pnl').innerText='PNL: $'+d.pnl;document.getElementById('time').innerText=d.time},2000)</script></body></html>`));
app.listen(PORT,()=>console.log('BEAST LIVE'));
 
