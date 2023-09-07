const countWords = (inputWords) => {
  return inputWords.reduce((countMap, word) => {
    countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
    // here is what it checks if in countMap object have property of word if so increments it by one 
    // otherwise creates property with name word and initializes it with 1
    return countMap;
  }, {});
};

module.exports = countWords;
