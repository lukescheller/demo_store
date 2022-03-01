const categorySort = (array) => {
  let sorted_categories = [];
  for (let x = 0; x < array.length; x++) {
    if (!sorted_categories.includes(array[x].category)) {
      sorted_categories.push(array[x].category);
    }
  }
  return sorted_categories.sort();
};

export default categorySort;
