
let quantity = Number(prompt('Enter price of the product'));
let pricePerDroid = Number(prompt('Enter delivery fee'));

if((pricePerDroid == Number.NaN) || (quantity== Number.NaN))
    console.log('price or deliveryFee not a number');
else
    console.log(getShippingMessage(quantity,pricePerDroid));

function makeTransaction (quantity, pricePerDroid){
  const totalPrice = quantity * pricePerDroid;
  return 'You ordered ${quantity} droids worth ${totalPrice} credits!';
}

