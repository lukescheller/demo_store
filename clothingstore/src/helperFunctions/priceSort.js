const priceSort = (array) => {
  let sorted_prices = [];
  for (let x = 0; x < array.length; x++) {
    let rmv = array[x].price.replace("$", "");
    let num = Number(rmv);
    sorted_prices.push(num);
  }
  let max = Math.max(...sorted_prices);
  let min = Math.min(...sorted_prices);
  return [min, max];
};

export default priceSort;
