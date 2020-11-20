// eBay interview question(Full time)
// Reverse only the vowels in the given string
// input = ebay
// output = abey

var reverseOnlyVowels = function(str){
  var vowels = str.match(/[aeiou]/g);
  var result = str.replace(/[aeiou]/g, ()=>vowels.pop());
  return result;
}
console.log(reverseOnlyVowels("hello"));

// Output >> holle

