let prices = [];
const cartPriceSort = (array) => {
  for (let x = 0; x < array.length; x++) {
    let rmv = array[x].price.replace("$", "");
    let num = Number(rmv);
    prices.push(num);
    return prices;
  }
};

export default cartPriceSort;
