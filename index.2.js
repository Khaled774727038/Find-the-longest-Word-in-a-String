function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');
  
    // Initialize a variable to keep track of the longest word length
    var maxLength = 0;
  
    // Iterate through each word in the array
    for (var i = 0; i < words.length; i++) {
      // Update maxLength if the current word's length is greater
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    // Return the length of the longest word
    return maxLength;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // that will print : 6
  console.log(findLongestWord("May the force be with you")); // that will print : 5
  