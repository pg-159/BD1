let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());
let port = 3000;

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let totalCartPrice = newItemPrice + cartTotal;
  res.send(totalCartPrice.toString());
});
app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = parseFloat(req.query.isMember);
  let totalCartPrice = cartTotal - ((10 / 100) * cartTotal);
  res.send(totalCartPrice.toString());
});

app.get('/calculate-tax', (req,res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxPrice = (5/100)*cartTotal;
  res.send(taxPrice.toString());
});

app.get('/estimate-delivery', (req,res) =>{
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let deliveryDays;
  if(shippingMethod == 'express'){
    deliveryDays = distance / 100;
  }
  else {
    deliveryDays = distance / 50;
  }
  res.send(deliveryDays.toString());
});

app.get('/shipping-cost', (req,res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight*distance*0.1;
  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req,res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = 2*purchaseAmount;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
