/*

    Calcula Desconto:
    Todos os Produtos acima de R$ 30,00 tem desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValueWithDiscount = 0;
let finalValue = 0

function calculateDiscount(price, discount = 10) {
  const result = (price * discount) / 100;
  return result;
}

cart.forEach((value) => {
  finalValue += value;
});

cart.forEach((value) => {
  if (value > 30) {
    value -= calculateDiscount(value);
  }
  finalValueWithDiscount += value;
});

console.log(`Valor total do carrinho foi de R$ ${finalValue.toFixed(2)},
porém você irá pagar R$ ${finalValueWithDiscount.toFixed(2)}, com desconto aplicado.`);
