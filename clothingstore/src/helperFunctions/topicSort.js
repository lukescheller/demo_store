let topicArray = [];
const topicSort = (string) => {
  if (!topicArray.includes(string)) {
    topicArray.push(string);
  } else {
    let findInx = topicArray.indexOf(string);
    topicArray.splice(findInx, 1);
  }
  // console.log(topicArray);
  return topicArray;
};

export default topicSort;
